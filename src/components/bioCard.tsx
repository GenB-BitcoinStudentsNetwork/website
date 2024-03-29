"use client";
import React, { useState } from "react";
import Image from "next/image";
import Modal from "./modal";
import SocialLink from "./socialLink";

interface Props {
  founder?: boolean;
  imagePath: string;
  name: string;
  info: string;
  twitterLink: string;
  linkedinLink: string;
  npub: string;
  biocardInfo?: string;
  bio: Array<Array<string | { text: string; href: string }>>;
}

const BioCard = ({
  founder,
  imagePath,
  name,
  info,
  twitterLink,
  linkedinLink,
  npub,
  bio,
  biocardInfo,
}: Props) => {
  const [openModal, setOpenModal] = useState(false);

  const closeModalHandler = () => {
    setOpenModal(false);
  };

  const openModalHandler = () => {
    setOpenModal(true);
  };

  const formatBioText = (
    paragraph: Array<string | { text: string; href: string }>
  ) => {
    let text = ``;
    for (let i = 0; i < paragraph.length; i++) {
      const value = paragraph[i];
      if (typeof value === "string") {
        text = `${text}${value}`;
      } else {
        text = `${text}<a style="color: #0075FF; text-decoration: underline;" href="${value.href}" target="_blank">${value.text}</a>`;
      }
    }
    return text;
  };
  return (
    <>
      <Modal isOpen={openModal} closeModal={closeModalHandler}>
        <div className="flex flex-col lg:flex-row items-center gap-8">
          <div
            className={`flex items-center justify-center w-[18.86031rem] h-[21.24431rem] lg:w-[30rem] lg:h-[33.79213rem]`}
            style={{
              background:
                "linear-gradient(180deg, rgba(255, 255, 255, 0.00) 0%, #B860AC 100%)",
            }}
          >
            <Image
              src={imagePath}
              alt={name}
              className={`object-cover w-[18.86031rem] h-[21.24431rem] lg:w-[30rem] lg:h-[33.79213rem]`}
              width={0}
              height={0}
              sizes="100vw"
            />
          </div>
          <div className="flex flex-col items-start gap-[1.25738rem] lg:gap-8 w-[18.86031rem] lg:h-[33.79213rem] lg:w-[30rem]">
            <div className="flex flex-col items-start gap-[0.943rem] lg:gap-6">
              <div className="flex flex-col items-start gap-[gap-[0.31431rem]] lg:gap-2">
                <h3 className="text-black text-lg lg:text-2xl font-semibold leading-[150%]">
                  {name}
                </h3>
                <p className="text-black text-sm lg:text-base italic leading-[150%]">
                  {biocardInfo ? biocardInfo : info}
                </p>
              </div>
              <div className="flex flex-col items-start gap-[0.31431rem] lg:gap-2">
                <h3 className="text-primary text-base lg:text-xl font-bold leading-[150%]">
                  Npub
                </h3>
                <p className="text-black text-sm lg:text-base leading-[150%] break-all">
                  {npub || "n/a"}
                </p>
              </div>
            </div>
            <div className="flex flex-col items-start gap-[0.31431rem] lg:gap-2">
              <h3 className="text-primary text-base lg:text-xl font-bold leading-[150%]">
                Bio
              </h3>
              <div className="flex flex-col gap-4 overflow-y-auto h-[10.53031rem] w-[18.86031rem] lg:h-[16.75rem] lg:w-[30rem]">
                {/* <div dangerouslySetInnerHTML={{ __html: sanitizedHTML || '' }} /> */}
                {bio.map((bioParagraph, id) => (
                  <p
                    className="text-black text-sm lg:text-base leading-[150%] text-justify w-[w-[18.31019rem]] lg:w-[29.125rem]"
                    key={id}
                    dangerouslySetInnerHTML={{
                      __html: formatBioText(bioParagraph),
                    }}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </Modal>
      <div className="flex flex-col items-start gap-4">
        <div
          className={`flex items-center justify-center rounded-lg ${
            founder
              ? "h-full lg:h-[25.3125rem] w-full lg:w-[23.1875rem]"
              : "w-[12rem] h-[13.55775rem] lg:w-[17.375rem] lg:h-[19.59181rem]"
          }`}
          style={{
            background:
              "linear-gradient(180deg, rgba(255, 255, 255, 0.00) 0%, #B860AC 100%)",
          }}
        >
          <Image
            src={imagePath}
            alt={name}
            className={`object-cover ${
              founder
                ? "h-[23.33388rem] lg:h-[25.3125rem] w-full lg:w-[23.1875rem]"
                : "w-[12rem] lg:w-[17.375rem] h-[13.55775rem] lg:h-[19.59181rem]"
            }`}
            width={0}
            height={0}
            sizes="100vw"
          />
        </div>
        <div
          className={`flex flex-col justify-between items-start ${
            founder
              ? "lg:h-[12.5625rem] lg:w-[23.1875rem]"
              : "lg:h-[11.0625rem] lg:w-[17.375rem]"
          }`}
        >
          <div className="flex flex-col items-start gap-2">
            <p
              className={`text-black ${
                founder ? "text-xl" : "text-base lg:text-xl"
              } font-semibold leading-[150%]`}
            >
              {name}
            </p>
            <div className="flex flex-col items-start">
              {founder && (
                <p className="text-black text-sm lg:text-base font-semibold leading-[150%]">
                  Co-founder at the Bitcoin Students Network
                </p>
              )}
              <p
                className={`text-black text-sm lg:text-base ${
                  founder ? "italic" : "w-[10.25rem] lg:w-[17.375rem]"
                } leading-[150%]`}
              >
                {info}
              </p>
            </div>
          </div>
          <div className="flex items-center gap-2 lg:gap-6 mt-[1.18rem] lg:mt-0">
            <button
              onClick={openModalHandler}
              className={`${
                founder
                  ? "py-2 px-4 text-base"
                  : "py-[0.33238rem] px-[0.66475rem] lg:py-2 lg:px-4 text-[0.66475rem] lg:text-base"
              } gap-2 border-primary border-solid border-[1px] rounded text-primary font-semibold leading-normal hover:bg-dark-green hover:text-white hover:border-dark-green `}
            >
              Show bio
            </button>
            <div className="flex items-start gap-[0.33038rem] lg:gap-2">
              <SocialLink
                name="twitter"
                imagePath="/dark_twitter.svg"
                link={twitterLink}
              />
              <SocialLink
                name="linkedin"
                imagePath="/blue_linkedin.svg"
                link={linkedinLink}
              />
              <SocialLink name="nostr" imagePath="/nostr.svg" link={npub} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BioCard;
