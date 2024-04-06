"use client";

import Image from "next/image";

interface PointsCardProps {
  repositoryName: string;
  repositoryLogo?: string | null;
  points: number;
  rank: number | null;
}

const PointsCard = ({ repositoryName, repositoryLogo, points, rank }: PointsCardProps) => {
  return (
    <>
      <div className="flex items-center justify-center rounded-lg bg-secondary">
        <div className="m-6 flex w-full flex-col items-center   rounded-lg bg-popover p-4 font-semibold">
          <div className="flex items-center gap-2">
            <div className="text-2xl lg:text-3xl">{repositoryName}</div>
            {repositoryLogo && (
              <Image
                src={repositoryLogo}
                height={40}
                width={40}
                alt="repository-logo"
                className="rounded-lg"
              />
            )}
          </div>
          <div className="text-5xl font-bold lg:text-8xl">{points}</div>
          <div>{rank === null ? "Earn points to see rankings" : `# Rank ${rank}`}</div>
        </div>
      </div>
    </>
  );
};

export default PointsCard;
