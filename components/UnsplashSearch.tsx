import { useState, useEffect } from "react";
import { createApi } from "unsplash-js";
import Image from "next/image";

export default function UnsplashSearch(props: { defaultData: any, setDefaultData: any }) {

    const [searchQuery, setSearchQuery] = useState('');

    // image list from api call result
    const [images, setImages] = useState<string[]>([]);

    // loading state for image blur effect
    const [isLoading, setLoading] = useState(true)

    // debounce search query to prevent api call on every keypress
    const debouncedSearchTerm = useDebounce(searchQuery, 500);

    // api config for unsplash
    const api = createApi({
        accessKey: `${process.env.UNSPLASH_ACCESS_KEY}`,
    });

    // search image from unsplash api on every keypress
    useEffect(() => {

        if (debouncedSearchTerm) {
            api.search.getPhotos({
                query: debouncedSearchTerm,
                orientation: "landscape",
                perPage: 30,
            }).then(result => {
                if (result.errors) {
                    console.log('error occurred: ', result.errors[0]);
                    return;
                }
                console.log("api called", debouncedSearchTerm);
                setImages(result.response.results.map((img: any) => img.urls.regular));
            });
        } else {
            setImages([]);
        }
    }
        , [debouncedSearchTerm]);
    
    // handle download image
    const handleDownload = (item: any) => {
        const a = document.createElement('a');
        a.download = 'unsplash-cover-maker.jpg';
        a.href = item;
        a.target = '_blank';
        a.click();
    }

    return (
        <div className="flex flex-col gap-2 mt-4 pb-16">
            <input type="text" name="search" id="search" className="focus:outline-none py-3 pl-4 text-lg rounded-full shadow-sm"
                value={searchQuery}
                onChange={e => setSearchQuery(e.target.value)}
                placeholder="Search Image from Unsplash"
            />
            <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                {
                    images.map((item: any, index: number) => {
                        return (
                            <div key={index} className="w-full overflow-hidden aspect-w-16 aspect-h-9 rounded-sm relative">
                                <Image
                                    src={item}
                                    alt="unsplash"
                                    fill
                                    sizes="true"
                                    className={` object-cover select-none ${isLoading ? 'blur-2xl grayscale' : 'blur-0 grayscale-0'} transition-all duration-500`}
                                    onClick={() => props.setDefaultData([
                                        {
                                            ...props.defaultData[0],
                                            cover: item
                                        }
                                    ])}
                                    onLoadingComplete={() => setLoading(false)}
                                    onDoubleClick={() => handleDownload(item)}
                                />
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

// after 500ms, the value will be set to debouncedValue
const useDebounce = (value: string, delay: number) => {
    const [debouncedValue, setDebouncedValue] = useState(value);

    useEffect(() => {
        const handler = setTimeout(() => {
            setDebouncedValue(value);
        }, delay);

        return () => {
            clearTimeout(handler);
        };
    }, [value, delay]);

    return debouncedValue;
}