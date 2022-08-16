import React from 'react'

const urls = [
    { src:"https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(72).webp"},
    { src:"https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(73).webp"},
    { src:"https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(74).webp"},
    { src:"https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(75).webp"},
    { src:"https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(76).webp"},
    { src:"https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(77).webp"},
]

const ImageGallery = () => {

 

  return (
    <div>
        <section class="overflow-hidden text-gray-700 ">
            <div class="container py-2 mx-auto lg:pt-12 lg:px-8">
                <div class="flex flex-wrap -m-1 md:-m-2">
                
                {urls.map((url, index) => {
                    return (
                        <div class="flex flex-wrap w-1/3" key={index}>
                            <div class="w-full p-1 md:p-2">
                                <img alt="gallery" class="block object-cover object-center w-full h-full rounded-lg"
                                src={url.src}
                                onClick={() => handleClick(url, index)}
                                />
                            </div>
                        </div>
                    )
                })}
                
                
                
                </div>
                
            </div>
           
            </section>
        
    </div>
  )
}

export default ImageGallery