"use client";
import { useReadContract } from "wagmi";
import { abi } from "./abis/Feed.js";
import PostCreator from "./PostCreator";
import { useSmartAccount } from "@biconomy/use-aa";
import Post from "./Post";

export default function Home() {
    const posts = useReadContract({
        abi,
        address: "0xeA1aB320bDb69Bfbda54fB4BECd8ef839A9cd722",
        functionName: "getAllComments",
    });

    const { smartAccountAddress } = useSmartAccount();

    return (
        <main className="flex flex-col items-center justify-between pt-16">
            <div>
                {smartAccountAddress && smartAccountAddress !== "0x" ? (
                    <div className="text-center p-4 border border-gray-700">
                        ✅ Smart Account Active
                        <br />
                        {smartAccountAddress}
                    </div>
                ) : (
                    <div className="text-center p-4 border border-gray-700">
                        No Smart Account
                    </div>
                )}
                <PostCreator />
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
                    <p>No posts yet...</p>
                )}
            </div>
        </main>
    );
}
