import React from "react";

interface PostProps {
    author: string;
    content: string;
    timestamp: string;
}

const Post: React.FC<PostProps> = ({ author, content, timestamp }) => {
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
                <p className="text-gray-500">
                    {days[date.getDay()]}, {date.getHours()}:{date.getMinutes()}
                </p>
            </div>
        </div>
    );
};

export default Post;
