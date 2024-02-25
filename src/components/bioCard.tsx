"use client";
import Image from "next/image";
import SocialLink from "./socialLink";

interface Props {
  founder?: boolean;
  imagePath: string;
  name: string;
  info: string;
  twitterLink: string;
  linkedinLink: string;
  npub: string;
}

const BioCard = ({
  founder,
  imagePath,
  name,
  info,
  twitterLink,
  linkedinLink,
  npub,
}: Props) => {
  return (
    <div className="flex flex-col items-start gap-4">
      <div
        className={`flex items-center justify-center rounded-lg ${
          founder
            ? "h-[25.3125rem] w-[23.1875rem]"
            : "w-[17.375rem] h-[19.59181rem]"
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
              ? "h-[25.3125rem] w-[23.1875rem]"
              : "w-[17.375rem] h-[19.59181rem]"
          }`}
          width={0}
          height={0}
          sizes="100vw"
        />
      </div>
      <div
        className={`flex flex-col justify-between items-start ${
          founder
            ? "h-[12.5625rem] w-[23.1875rem]"
            : "h-[11.0625rem] w-[17.375rem]"
        }`}
      >
        <div className="flex flex-col items-start gap-2">
          <p className="text-black text-xl font-semibold leading-[150%]">
            {name}
          </p>
          <div className="flex flex-col items-start">
            {founder && (
              <p className="text-black text-base font-semibold leading-[150%]">
                Co-founder at the Bitcoin Student Network
              </p>
            )}
            <p
              className={`text-black text-base ${
                founder ? "italic" : ""
              } leading-[150%]`}
            >
              {info}
            </p>
          </div>
        </div>
        <div className="flex items-center gap-6">
          <button className="py-2 px-4 gap-2 border-primary border-solid border-[1px] rounded text-primary text-base font-semibold leading-normal">
            Show bio
          </button>
          <div className="flex items-start gap-2">
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
  );
};

export default BioCard;
