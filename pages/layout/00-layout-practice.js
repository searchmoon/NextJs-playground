import React from "react";
import {DefaultLayout} from "../../components/layout";
import styled from "@emotion/styled";
import {respSize} from "../../components/common";

const LayoutPractice = () => {
    return (
        <Layout>
            <DefaultLayout>
                <p>재개발 할 카드를 선택해 주세요</p>
                <div className={"wrap-flex"}>
                    <SelectRebuildCard>
                        <div className={"main-card"}>
                            <div className={"img-wrap"}>
                                <img
                                    src={
                                        "https://d2jneiw56ezkg5.cloudfront.net/card/gangnamgu/single_story_house1406.png"
                                    }
                                />
                                <button className={"change-btn"}>교체</button>
                            </div>
                            <button className={"select-btn"}>카드선택</button>
                        </div>
                        <div className={"card-info"}></div>
                    </SelectRebuildCard>
                    <WrapMaterials>
                        <div className={"material-boxs"}>
                            <div className={"material-box"}>카드</div>
                            <div className={"material-box"}>카드</div>
                            <div className={"material-box"}>카드</div>
                            <div className={"material-box"}>카드</div>
                        </div>
                        <button className={"select-btn"}>카드선택</button>
                    </WrapMaterials>
                </div>
            </DefaultLayout>
        </Layout>
    );
};

const Layout = styled.div`
  margin: 0 32px;

  ${DefaultLayout} {
    border: 12px solid #11162d;
    border-radius: 16px;
    text-align: center;
    padding-bottom: 72px;
    padding-left: 60px;

    p {
      margin: 63px 0 55px;
    }
  }

  .wrap-flex {
    display: flex;
  }

  @media (max-width: ${respSize.tablet}px) {
    ${DefaultLayout} {
      padding-left: 32px;
    }

    .wrap-flex {
      flex-direction: column;
      align-items: center;
    }
  }
`;
const SelectRebuildCard = styled.div`
  background-color: yellow;
  min-height: 600px;
  border-radius: 16px;
  max-width: 600px;
  width: 100%;
  padding: 40px 30px;
  display: flex;

  .main-card {
    margin-right: 20px;
    max-width: 320px;

    .img-wrap {
      position: relative;

      img {
        width: 100%;
        border-radius: 16px;
      }

      .change-btn {
        position: absolute;
        left: 10px;
        bottom: 10px;
        border: none;
        width: 64px;
        height: 26px;
        border-radius: 26px;
        background: black;
      }
    }

    .select-btn {
      display: block;
      padding: 16px 27px;
      background: #5B15D5;
      border-radius: 24px;
      border: none;
      margin: 20px auto 0;
    }
  }

  .card-info {
    min-width: 200px;
    height: 427px;
    border-radius: 16px;
    background-color: darkgrey;
  }

  @media (max-width: ${respSize.tablet}px) {
    margin-bottom: 101px;
  }
  @media (max-width: ${respSize.mobile}px) {
    flex-direction: column;
    padding: 24px 24px;
    .main-card {
      margin: 0 auto;
      max-width: 319px;

      img {
        width: 100%;
        border-radius: 16px;
      }

      .select-btn {
        display: block;
        padding: 16px 27px;
        background: #5B15D5;
        border-radius: 24px;
        border: none;
        margin: 20px auto 0;
      }
    }

    .card-info {
      margin: 50px auto 0;
    }
`;

const WrapMaterials = styled.div`
  max-width: 355px;
  width: 100%;
  min-height: 600px;
  border-radius: 16px;
  margin-left: 127px;

  .material-boxs {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-column-gap: 23px;
    grid-row-gap: 21px;

    .material-box {
      aspect-ratio: 166/234;
      background-color: cadetblue;
      border-radius: 16px;
    }
  }

  .select-btn {
    display: block;
    padding: 16px 27px;
    background: #5b15d5;
    border-radius: 24px;
    border: none;
    margin: 60px auto 63px;
  }

  @media (max-width: ${respSize.tablet}px) {
    margin-left: 0;
  }
`;

export default LayoutPractice;
