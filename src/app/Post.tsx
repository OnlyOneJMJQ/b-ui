import React from "react";
import { useSendSponsoredTransaction, useUserOpWait } from "@biconomy/use-aa";
import { encodeFunctionData, parseAbi } from "viem";
import { sepolia } from "viem/chains";

interface PostProps {
    id: bigint;
    author: string;
    content: string;
    timestamp: bigint;
}

const Post: React.FC<PostProps> = ({ id, author, content, timestamp }) => {
    const {
        mutate,
        data: userOpResponse,
        error,
        isPending,
    } = useSendSponsoredTransaction();

    const {
        isLoading: waitIsLoading,
        isSuccess: waitIsSuccess,
        error: waitError,
        data: waitData,
    } = useUserOpWait(userOpResponse);

    const handleBookmark = () =>
        mutate({
            transactions: {
                to: "0xeA1aB320bDb69Bfbda54fB4BECd8ef839A9cd722",
                data: encodeFunctionData({
                    abi: parseAbi([
                        "function bookmarkComment(uint256 commentId)",
                    ]),
                    functionName: "bookmarkComment",
                    args: [id],
                }),
            },
        });

    const date = new Date(Number(timestamp) * 1000);

    const days = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
    ];

    return (
        <div className="border border-gray-700 p-4">
            <p className="text-gray-100 text-lg">{content}</p>
            <div className="mt-4">
                <p className="text-gray-500">{author}</p>
                <div className="flex justify-between">
                    <button
                        onClick={handleBookmark}
                        disabled={waitIsLoading || isPending}
                        className="bg-black text-pink-500 hover:text-pink-700 font-bold cursor-pointer"
                    >
                        {waitIsLoading || isPending
                            ? "Bookmarking..."
                            : "Bookmark"}
                    </button>
                    <p className="text-gray-500">
                        {days[date.getDay()]}, {date.getHours()}:
                        {date.getMinutes()}
                    </p>
                </div>
                {waitIsSuccess && (
                    <div>
                        <a
                            href={`${sepolia.blockExplorers.default.url}/tx/${waitData?.receipt?.transactionHash}`}
                        >
                            View on Etherscan Sepolia
                        </a>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Post;
