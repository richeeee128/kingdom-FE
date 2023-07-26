import React, { useState } from "react";
import { useRouter } from "../hooks/commen";
import { CustomUl, Customli, Figure, FlexBox } from "../components/common";
import * as Story from "../components/story/";
import { BiListUl } from "react-icons/bi";
import {
  useDeleteStoriesRTKMutation,
  useGetStoriesCOmmentsRTKQuery,
  usePatchStoriesRTKMutation,
  usePostStoriesCOmmentsRTKMutation,
} from "../redux";
import { IsLoadingPage } from "./IsLoadingPage";
import { useSelector } from "react-redux";
import { selectToken } from "../redux/modules/tokenSlice";

export function StoryDetail() {
  const { onNavigate, id } = useRouter();
  const [comment, setComment] = useState("");
  const { isLoading, data } = useGetStoriesCOmmentsRTKQuery(id);
  const [deleteStoriesRTK] = useDeleteStoriesRTKMutation();
  const { nickname } = useSelector(selectToken);

  const onDeleteJob = (id) => async () => {
    deleteStoriesRTK(id);
    onNavigate(-1)();
  };

  const [onPatchStories] = usePatchStoriesRTKMutation();
  const onUpdateJob = (id) => async () => {
    const formData = new FormData();
    formData.append(
      "data",
      new Blob([JSON.stringify({ title: "수정하기", content: "수정하기" })], {
        type: "application/json",
      })
    );
    onPatchStories({ id, payload: formData });
    console.log("수정하기");
  };

  const onChangeComment = (e) => {
    const replace = e.target.value.replace("(?:\r\n|\r|\n)/g", <br />); // (?:\r\n|\r|\n)/g // textarea 줄바꿈처리
    setComment(replace);
  };
  const [postStoriesCommentRTK] = usePostStoriesCOmmentsRTKMutation();
  const onSubmitComment = (e) => {
    postStoriesCommentRTK({ id, payload: { content: comment } });
  };

  if (isLoading) return <IsLoadingPage />;
  
  return (
    <div>
      {/* Stories - 상단 이미지 */}
      <Figure
        style={{ marginTop: "50px", marginBottom: "25px" }}
        children={
          <img
            src={require("../assets/images/top_story.png")}
            alt="top_story"
          />
        }
      />
      <Story.StoryDetailLayout>

        {/* 테이블 Header, Body */}
        <Story.StoryDetailTitle>
          <p className="title">{data.title}</p>
          <FlexBox $jc="space-between">
            <CustomUl>
              <Customli
                style={{ paddingLeft: "0" }}
                children={data.username}
              />
              <Customli
                $before="horizon"
                children={data.createdAt.split("T")[0]}
              />
            </CustomUl>
            <CustomUl>
              <Customli children={`조회수 ${data.viewCount}`} />
              <Customli
                style={{ paddingRight: "0" }}
                $before="horizon"
                children={`좋아요 ${data.liked}`}
              />
            </CustomUl>
          </FlexBox>
        </Story.StoryDetailTitle>
        <Story.StoryDetailArtical>
          <Figure
            width="200px"
            children={<img src={data?.image} alt="Detailimgs" />}
          />
          <FlexBox $gap={5}>
            <Story.StoryDetailBtn onClick={onDeleteJob(data.id)}>
              좋아요
            </Story.StoryDetailBtn>
            {nickname === data.username && (
              <>
                <Story.StoryDetailBtn onClick={onUpdateJob(data.id)}>
                  수정하기
                </Story.StoryDetailBtn>
                <Story.StoryDetailBtn onClick={onDeleteJob(data.id)}>
                  삭제하기
                </Story.StoryDetailBtn>
              </>
            )}
          </FlexBox>
        </Story.StoryDetailArtical>
        {/* 테이블 Footer - COMMENTS */}
        <Story.StoryComment $bottomLine={true}>
          댓글 {data.length}
        </Story.StoryComment>
        {data.commentList.map((comments) => (
          <Story.StoryCommtens key={comments.id}>
            <div
              style={{
                padding: "10px 0",
                width: "100%",
                borderBottom: "1px solid #dadada",
              }}
            >
              <FlexBox $jc="space-between" style={{ width: "100%" }}>
                <CustomUl>
                  <Customli
                    style={{ paddingLeft: "0" }}
                    children={data.username}
                  />
                  <Customli
                    $before="horizon"
                    children={data.createdAt?.split("T")[0]}
                  />
                </CustomUl>
                <CustomUl>
                  <Customli children={`조회수 ${data.view}`} />
                  <Customli
                    style={{ paddingRight: "0" }}
                    $before="horizon"
                    children={`좋아요 ${data.like}`}
                  />
                </CustomUl>
              </FlexBox>
              <p>
                댓글댓글댓글댓글댓글댓글댓글댓글댓글댓글댓글댓글댓글댓글댓글
              </p>
              {nickname === data.username && (
              <FlexBox $jc="flex-start">
                <Story.StoryDetailBtn >
                  수정하기
                </Story.StoryDetailBtn>
                <Story.StoryDetailBtn >
                  삭제하기
                </Story.StoryDetailBtn>
              </FlexBox>)}
            </div>
          </Story.StoryCommtens>
        ))}
        <Story.StoryComment $gap={10} style={{ width: "100%" }}>
          <Story.StoryCommentText
            value={comment}
            onChange={onChangeComment}
            placeholder="광고성 글이나 근거없는 비방글 또는 계시판 성격과 맞지 않는 글은 삭제 후 이용제한 처리 됩니다."
          />
          <Story.StoryCommentTextBtn
            onClick={onSubmitComment}
            children="답글"
          />
        </Story.StoryComment>
        <FlexBox
          $jc="space-between"
          style={{ width: "100%", padding: "15px 20px" }}
        >
          <Story.StorieIndexBtn onClick={onNavigate("/stories/1")}>
            <BiListUl size={30} />
            <p>목록</p>
          </Story.StorieIndexBtn>
          <Story.StorieIndexBtn
            onClick={onNavigate("/storieswrite")}
            $type="write"
          >
            <p>글쓰기</p>
          </Story.StorieIndexBtn>
        </FlexBox>
      </Story.StoryDetailLayout>
    </div>
  );
}