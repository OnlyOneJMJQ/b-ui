"use client";
import { useSendSponsoredTransaction, useUserOpWait } from "@biconomy/use-aa";
import { encodeFunctionData, parseAbi } from "viem";
import React, { useState } from "react";
import { sepolia } from "viem/chains";

export default function PostCreator() {
    const [postText, setPostText] = useState("");

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

    const handleSubmit = () =>
        mutate({
            transactions: {
                to: "0xeA1aB320bDb69Bfbda54fB4BECd8ef839A9cd722",
                data: encodeFunctionData({
                    abi: parseAbi([
                        "function postComment(string calldata content)",
                    ]),
                    functionName: "postComment",
                    args: [postText],
                }),
            },
        });

    const handlePostChange = (
        event: React.ChangeEvent<HTMLTextAreaElement>
    ) => {
        setPostText(event.target.value);
    };

    return (
        <div className="border border-gray-700">
            <textarea
                value={postText}
                onChange={handlePostChange}
                className="bg-black p-4 w-full"
                placeholder="What's buzzing around your mind?"
            />
            <button
                onClick={handleSubmit}
                disabled={waitIsLoading || isPending}
                className="text-yellow-500 hover:text-yellow-700 bg-black p-4 font-bold cursor-pointer"
            >
                {waitIsLoading || isPending ? "Buzzing..." : "🐝 Buzz"}
            </button>
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
    );
}
