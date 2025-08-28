import React from 'react';

const Loading = () => {
    return (
        <div className=" flex justify-center items-center min-h-screen">
            <div className="flex flex-col items-center gap-4">
                {/* Spinner */}
                <span className="loading loading-spinner loading-xl"></span>
            </div>
        </div>
    );
};

export default Loading;
