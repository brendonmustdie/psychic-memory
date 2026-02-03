"use client";

import { useState } from "react";

export default function BlogComp({ blogPosts = [] }) {
    const POSTS_PER_PAGE = 3;
    const [currentPage, setCurrentPage] = useState(1);

    const totalPages = Math.ceil(blogPosts.length / POSTS_PER_PAGE);
    const startIndex = (currentPage - 1) * POSTS_PER_PAGE;
    const currentPosts = blogPosts.slice(
        startIndex,
        startIndex + POSTS_PER_PAGE
    );

    return (
        <div className="grid grid-cols-3 gap-2">
            {currentPosts.map((blogPost, index) => (
                <div
                    key={blogPost.id ?? `${blogPost.title}-${index}`}
                    className="p-4 rounded bg-white text-black"
                >
                    <div className="font-bold text-lg font-handwritten">{blogPost.title}</div>
                    <div className={"font-serif"}>{blogPost.description}</div>
                </div>
            ))}

            {totalPages > 1 && (
                <div className="flex gap-2 justify-center mt-4">
                    <button
                        onClick={() => setCurrentPage(p => Math.max(p - 1, 1))}
                        disabled={currentPage === 1}
                        className="px-3 py-1 rounded bg-gray-200 disabled:opacity-50"
                    >
                        Prev
                    </button>

                    <span className="px-3 py-1 text-sm">
            Page {currentPage} of {totalPages}
          </span>
svg
                    <button
                        onClick={() => setCurrentPage(p => Math.min(p + 1, totalPages))}
                        disabled={currentPage === totalPages}
                        className="px-3 py-1 rounded bg-gray-200 disabled:opacity-50"
                    >
                        Next
                    </button>
                </div>
            )}
        </div>
    );
}
