import React from 'react'
// import apkFile from "./assets/app-debug.apk";
import d from "./assets/d.jpg"
const landing = () => {

    // const handleDownload = () => {
    //     const link = document.createElement("a");
    //     link.href = apkFile;
    //     link.download = "app-debug.apk";
    //     link.click();
    // };
    return (
        <div>
            <div className='flex flex-col sm:flex-row mt-10'>
                <div className='w-[100%] sm:w-[50%] flex justify-center items-center sm:h-[71vh] h-[52vh] '>
                    {/* <div id="lottie-container" style={{ width: '600px', height: '600px' }} /> */}
                    <img src={d} alt='dd' />
                </div>
                <div className='w-[100%] sm:w-[50%] flex flex-col justify-center items-center'>
                    <p className='font-bold ml-10 md:text-3xl sm:text-   text-blue-600'>Keep Your File More Managable...</p>
                    <p className='font-bold mt-4  md:text-2xl  text-blue-500'>Let Organize Your File...</p>
                    <a
                        href="Organize_me.apk"
                        download="Organize_me.apk"
                    ><button  className='px-5 py-1 text-white font-bold bg-blue-700 rounded-md mt-10'>Let's Download App</button>
                    </a>
                </div>

            </div>
        </div>
    )
}

export default landing
