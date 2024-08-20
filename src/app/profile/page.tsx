"use client";
import Image from "next/image";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { useReadContract } from "wagmi";
import { abi } from "../abis/Feed.js";
import { useSmartAccount } from "@biconomy/use-aa";
import Post from "../Post";

export default function Profile() {
    const { smartAccountAddress } = useSmartAccount();

    const posts = useReadContract({
        abi,
        address: "0xeA1aB320bDb69Bfbda54fB4BECd8ef839A9cd722",
        functionName: "getCommentsByUser",
        args: [smartAccountAddress],
    });

    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
                <ConnectButton />
                <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:size-auto lg:bg-none">
                    <a
                        className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
                        href="https://Biconomy.com?utm_source=create-biconomy-app&utm_medium=appdir-template&utm_campaign=create-biconomy-app"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        By{" "}
                        <Image
                            src="/biconomy.svg"
                            alt="Biconomy Logo"
                            width={100}
                            height={24}
                            priority
                        />
                    </a>
                </div>
            </div>

            <div className="relative flex flex-col gap-6 place-items-center">
                <div className="flex">
                    Posts by{" "}
                    {smartAccountAddress
                        ? `${smartAccountAddress}`
                        : "Not Connected"}
                </div>
            </div>

            <div className="relative flex flex-col gap-6 place-items-center">
                {posts.isLoading && <div>Loading...</div>}
                {posts.error && <div>Error: {posts.error.message}</div>}
                {posts.data && (
                    <>
                        {posts.data.toReversed().map((post, index) => (
                            <Post
                                author={post.poster}
                                content={post.content}
                                timestamp={post.timestamp}
                            />
                        ))}
                    </>
                )}
            </div>
        </main>
    );
}
