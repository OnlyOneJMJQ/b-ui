export const abi = [
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "address",
                name: "user",
                type: "address",
            },
            {
                indexed: true,
                internalType: "uint256",
                name: "commentId",
                type: "uint256",
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "timestamp",
                type: "uint256",
            },
        ],
        name: "CommentBookmarked",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "uint256",
                name: "commentId",
                type: "uint256",
            },
            {
                indexed: true,
                internalType: "address",
                name: "poster",
                type: "address",
            },
            {
                indexed: false,
                internalType: "string",
                name: "content",
                type: "string",
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "timestamp",
                type: "uint256",
            },
        ],
        name: "CommentPosted",
        type: "event",
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "commentId",
                type: "uint256",
            },
        ],
        name: "bookmarkComment",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [],
        name: "getAllComments",
        outputs: [
            {
                components: [
                    {
                        internalType: "uint256",
                        name: "id",
                        type: "uint256",
                    },
                    {
                        internalType: "address",
                        name: "poster",
                        type: "address",
                    },
                    {
                        internalType: "string",
                        name: "content",
                        type: "string",
                    },
                    {
                        internalType: "uint256",
                        name: "timestamp",
                        type: "uint256",
                    },
                ],
                internalType: "struct Feed.Comment[]",
                name: "",
                type: "tuple[]",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "getBookmarks",
        outputs: [
            {
                components: [
                    {
                        internalType: "uint256",
                        name: "commentId",
                        type: "uint256",
                    },
                    {
                        internalType: "uint256",
                        name: "timestamp",
                        type: "uint256",
                    },
                ],
                internalType: "struct Feed.Bookmark[]",
                name: "",
                type: "tuple[]",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "commentId",
                type: "uint256",
            },
        ],
        name: "getCommentById",
        outputs: [
            {
                components: [
                    {
                        internalType: "uint256",
                        name: "id",
                        type: "uint256",
                    },
                    {
                        internalType: "address",
                        name: "poster",
                        type: "address",
                    },
                    {
                        internalType: "string",
                        name: "content",
                        type: "string",
                    },
                    {
                        internalType: "uint256",
                        name: "timestamp",
                        type: "uint256",
                    },
                ],
                internalType: "struct Feed.Comment",
                name: "",
                type: "tuple",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "user",
                type: "address",
            },
        ],
        name: "getCommentsByUser",
        outputs: [
            {
                components: [
                    {
                        internalType: "uint256",
                        name: "id",
                        type: "uint256",
                    },
                    {
                        internalType: "address",
                        name: "poster",
                        type: "address",
                    },
                    {
                        internalType: "string",
                        name: "content",
                        type: "string",
                    },
                    {
                        internalType: "uint256",
                        name: "timestamp",
                        type: "uint256",
                    },
                ],
                internalType: "struct Feed.Comment[]",
                name: "",
                type: "tuple[]",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "string",
                name: "content",
                type: "string",
            },
        ],
        name: "postComment",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
];
