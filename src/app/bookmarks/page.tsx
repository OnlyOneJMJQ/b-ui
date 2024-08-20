"use client";
import Image from "next/image";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { useReadContract } from "wagmi";
import { abi } from "../abis/Feed.js";
import Post from "../Post";
import { useSmartAccount } from "@biconomy/use-aa";

export default function Profile() {
    const { smartAccountAddress } = useSmartAccount();

    const posts = useReadContract({
        abi,
        address: "0xeA1aB320bDb69Bfbda54fB4BECd8ef839A9cd722",
        account: smartAccountAddress,
        functionName: "getBookmarks",
    });

    return (
        <main className="flex flex-col items-center justify-between p-24">
            <div className="relative flex flex-col gap-6 place-items-center">
                <div className="flex">Bookmarks</div>
            </div>

            <div className="relative flex flex-col gap-6 place-items-center">
                {posts.isLoading && <div>Loading...</div>}
                {posts.error && <div>Error: {posts.error.message}</div>}
                {posts.data && (
                    <>
                        {posts.data.toReversed().map((post, index) => (
                            <Post
                                id={post.id}
                                author={post.poster}
                                content={post.content}
                                timestamp={post.timestamp}
                            />
                        ))}
                    </>
                )}
                {posts.data && posts.data.length === 0 && (
                    <p>No bookmarks yet...</p>
                )}
            </div>
        </main>
    );
}
