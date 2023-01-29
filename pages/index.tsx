import Head from 'next/head'
import { useState } from 'react'
import { FaFileImage, FaUserCircle } from 'react-icons/fa';
import React, { useRef } from 'react';
import Footer from '@/components/Footer';
import Download from '@/components/Download';
import CoverData from '@/components/CoverData';
import CoverImage from '@/components/CoverImage';
import FileInput from '@/components/FileInput';
import Label from '@/components/Label';
import UnsplashSearch from '@/components/UnsplashSearch';

export default function Home() {
  const [defaultData, setDefaultData] = useState([
    {
      description: 'Next.js is an open-source React front-end development web framework that enables functionality such as server-side rendering and generating static websites for React based web applications.',
      title: 'Why nextjs is awesome?',
      author: 'Saurav Hathi',
      avatar: 'https://avatars.githubusercontent.com/u/61316762?v=4',
      cover: './images/default.webp',
      coverColor: '#fff',
      opacity: 0,
      padding: 0,
      bgColor: '#9ca3af',
      textColor: '#FFFFFF',
      font: 'sans-serif',
      textTitleSize: 4,
      textDescriptionSize: 1.5,
      textAuthorSize: 1.25,
      design: 'light',
      coverHeight: 32,
      avatarSize: 3,
      objectPosition: [
        { value: 'top', flag: false },
        { value: 'bottom', flag: false },
        { value: 'left', flag: false },
        { value: 'right', flag: false },
        { value: 'center', flag: true },
      ]
    }
  ])

  const previewContainer = useRef<HTMLDivElement>(null);

  return (
    <>
      <Head>
        <title>Cover Maker: Create beautiful cover images for your next blog post</title>
        <meta name="description" content="Create beautiful cover images for your next blog post" />
        <meta name="copyright" content="Saurav Hathi" />
        <meta name="author" content="Saurav Hathi" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        {/* <nav className=" bg-white shadow-sm sticky top-0 z-10"> 
          <div className="flexRow justify-center itemCenterGap p-4">
            <h1 className="text-2xl font-bold">Cover Maker</h1>
            <Link href="https://github.com/sauravhathi" className="p-2 rounded-md bg-gray-100 hover:bg-gray-200">
              <FaGithub className="text-2xl" />
            </Link>
            
          </div>
        </nav> */}
        <div className="flex flex-col md:flex-row gap-4">
          <section id="editor" className="w-full md:w-[35%] md:sticky md:top-0 md:left-0 pb-16 flex flex-col gap-2 p-4 md:overflow-y-scroll md:h-screen">
            <Label htmlFor="description" text="Description:" />
            <input type="text" name="description" value={defaultData[0].description}
              onChange={
                e => setDefaultData([
                  {
                    ...defaultData[0],
                    description: e.target.value
                  }
                ])
              }
              className="inputFieldData" />
            <Label htmlFor="title" text="Title:" />
            <input type="text" name="title"
              value={defaultData[0].title}
              onChange={
                e => setDefaultData([
                  {
                    ...defaultData[0],
                    title: e.target.value
                  }
                ])
              }
              className="inputFieldData" />
            <Label htmlFor="author" text="Author:" />
            <input type="text" name="author"
              value={defaultData[0].author}
              onChange={
                e => setDefaultData([
                  {
                    ...defaultData[0],
                    author: e.target.value
                  }
                ])
              }
              className="inputFieldData" />
            <Label htmlFor="coverHeight" text="Cover Height:" />
            <input type="range" name="coverHeight"
              min="10" max="45" step="0.5"
              value={defaultData[0].coverHeight}
              onChange={
                e => setDefaultData([
                  {
                    ...defaultData[0],
                    coverHeight: parseInt(e.target.value)
                  }
                ])
              }

              className="" />
            <Label htmlFor="avatarSize" text="Avatar Size:" />
            <input type="range" name="avatarSize"
              min="2" max="8" step="0.5"
              value={defaultData[0].avatarSize}
              onChange={
                e => setDefaultData([
                  {
                    ...defaultData[0],
                    avatarSize: parseInt(e.target.value)
                  }
                ])
              }
              className="" />
            <FileInput
              icon={<FaFileImage className="text-2xl" />}
              defaultValue={defaultData}
              setDefaultData={setDefaultData}
              dataKey={'cover'}
            />

            <FileInput
              icon={<FaUserCircle className="text-2xl" />}
              defaultValue={defaultData}
              setDefaultData={setDefaultData}
              dataKey={'avatar'}
            />

            <div className="flex flex-wrap itemCenterGap mt-2">
              <div className="flexRow itemCenterGap">
                <Label htmlFor="titleSize" text="Title Size:" />
                <input type="number" name="titleSize"
                  min="2" max="6" step="0.1"
                  value={defaultData[0].textTitleSize}
                  onChange={
                    e => setDefaultData([
                      {
                        ...defaultData[0],
                        textTitleSize: parseFloat(e.target.value)
                      }
                    ])
                  }
                  className="inputField" />
              </div>
              <div className="flexRow itemCenterGap">
                <Label htmlFor="descriptionSize" text="Description Size:" />
                <input type="number" name="descriptionSize"
                  min="1" max="4" step="0.1"
                  value={defaultData[0].textDescriptionSize}
                  onChange={
                    e => setDefaultData([
                      {
                        ...defaultData[0],
                        textDescriptionSize: parseFloat(e.target.value)
                      }
                    ])
                  }
                  className="inputField" />
              </div>
              <div className="flexRow itemCenterGap">
                <Label htmlFor="authorSize" text="Author Size:" />
                <input type="number" name="authorSize" min="0.5" max="2" step="0.1"
                  value={defaultData[0].textAuthorSize}
                  onChange={
                    e => setDefaultData([
                      {
                        ...defaultData[0],
                        textAuthorSize: parseFloat(e.target.value)
                      }
                    ])
                  }
                  className="inputField" />
              </div>
              <div className="flexRow itemCenterGap">
                <Label htmlFor="opacity" text="Opacity:" />
                <input type="number" name="opacity" min="0" max="1" step="0.01"
                  value={defaultData[0].opacity}
                  onChange={
                    e => setDefaultData([
                      {
                        ...defaultData[0],
                        opacity: parseFloat(e.target.value)
                      }
                    ])
                  }
                  className="inputField" />
              </div>
              <div className="flexRow itemCenterGap">
                <Label htmlFor="padding" text="Padding:" />
                <input type="number" name="padding" min="0" max="10" step="0.5"
                  value={defaultData[0].padding}
                  onChange={
                    e => setDefaultData([
                      {
                        ...defaultData[0],
                        padding: parseFloat(e.target.value)
                      }
                    ])
                  }

                  className="inputField" />
              </div>
              <div className="flexRow itemCenterGap">
                <Label htmlFor="bgColor" text="BG Color:" />
                <input type="color" name="bgColor"
                  value={defaultData[0].bgColor}
                  onChange={
                    e => setDefaultData([
                      {
                        ...defaultData[0],
                        bgColor: e.target.value
                      }
                    ])
                  }

                  className="inputFieldCustom " />
              </div>
              <div className="flexRow itemCenterGap">
                <Label htmlFor="textColor" text="Text Color:" />
                <input type="color" name="textColor"
                  value={defaultData[0].textColor}
                  onChange={
                    e => setDefaultData([
                      {
                        ...defaultData[0],
                        textColor: e.target.value
                      }
                    ])
                  }

                  className="inputFieldCustom " />
              </div>
              <div className="flexRow itemCenterGap">
                <Label htmlFor="unsetImage" text="Unset Image:" />
                <input type="checkbox" name="unsetImage"
                  onChange={
                    e => setDefaultData([
                      {
                        ...defaultData[0],
                        cover: e.target.checked ? '' : './images/default.webp'
                      }
                    ])
                  }
                  className="w-5 h-5" />

              </div>
              <div className="flexRow itemCenterGap">
                <Label htmlFor="unsetAvatar" text="Unset Avatar:" />
                <input type="checkbox" name="unsetAvatar"
                  onChange={
                    e => setDefaultData([
                      {
                        ...defaultData[0],
                        avatar: e.target.checked ? '' : 'https://avatars.githubusercontent.com/u/61316762?v=4'
                      }
                    ])
                  }
                  className="w-5 h-5" />
              </div>
            </div>
            <Label htmlFor="objectPosition" text="Object Position:" />
            <select name="objectPosition" id="objectPosition" value={defaultData[0].objectPosition.filter((item: any) => item.flag === true)[0].value} onChange={
              e => setDefaultData([
                {
                  ...defaultData[0],
                  objectPosition: defaultData[0].objectPosition.map((item: any) => {
                    if (item.value === e.target.value) {
                      return {
                        ...item,
                        flag: true
                      }
                    } else {
                      return {
                        ...item,
                        flag: false
                      }
                    }
                  })
                }
              ])
            }
              className="p-2 rounded-sm">
              <option value="top">Top</option>
              <option value="center">Center</option>
              <option value="bottom">Bottom</option>
              <option value="left">Left</option>
              <option value="right">Right</option>
            </select>
            <Label htmlFor="font" text="Font:" />
            <select name="font" id="font" value={defaultData[0].font} onChange={
              e => setDefaultData([
                {
                  ...defaultData[0],
                  font: e.target.value
                }
              ])
            }
              className="p-2 rounded-sm">
              <option value="serif">serif</option>
              <option value="sans-serif">sans-serif</option>
              <option value="monospace">monospace</option>
              <option value="cursive">cursive</option>
              <option value="fantasy">fantasy</option>
            </select>
            <Download re={previewContainer} />
          </section>
          <section id="preview" className="w-full md:w-[65%] flex flex-col p-4">
            <div className='p-4 bg-blue-600 rounded-md overflow-hidden'>
              {/* cover design 1*/}
              <div ref={previewContainer} className={`relative`} style={{ height: `${defaultData[0].coverHeight}rem` }}>
                <CoverImage src={defaultData[0].cover} bgColor={defaultData[0].bgColor} objectPosition={defaultData[0].objectPosition.filter((item: any) => item.flag === true)[0].value} />
                <div className="absolute w-full h-full top-0 left-0 flex flex-col justify-center text-center items-center gap-1 p-4" style={{ backgroundColor: `rgba(0,0,0,${defaultData[0].opacity})`, padding: `${defaultData[0].padding}rem`, fontFamily: `${defaultData[0].font}` }}>
                  <CoverData color={defaultData[0].textColor} size={defaultData[0].textTitleSize}>{defaultData[0].title}</CoverData>
                  <CoverData color={defaultData[0].textColor} size={defaultData[0].textDescriptionSize}>{defaultData[0].description}</CoverData>
                  <CoverData color={defaultData[0].textColor} size={defaultData[0].textAuthorSize} className='flex itemCenterGap'>
                    {defaultData[0].avatar ? <img src={defaultData[0].avatar} alt="author" className="rounded-full" style={{ width: `${defaultData[0].avatarSize}rem`, height: `${defaultData[0].avatarSize}rem` }} /> : null}
                    {defaultData[0].author}
                  </CoverData>
                </div>
              </div>
              {/* cover design 2 */}
              {/* <div ref={previewContainer} className={`grid grid-cols-2 gap-4`} style={{ height: `${defaultData[0].coverHeight}rem`, backgroundColor: `${defaultData[0].bgColor}` }}>
                <div className="flex flex-col justify-center items-end gap-1 p-4" style={{ backgroundColor: `rgba(0,0,0,${defaultData[0].opacity})`, padding: `${defaultData[0].padding}rem`, fontFamily: `${defaultData[0].font}` }}>
                  <CoverData color={defaultData[0].textColor} size={defaultData[0].textTitleSize}>{defaultData[0].title}</CoverData>
                  <CoverData color={defaultData[0].textColor} size={defaultData[0].textDescriptionSize}>{defaultData[0].description}</CoverData>
                  <CoverData color={defaultData[0].textColor} size={defaultData[0].textAuthorSize} className='flex itemCenterGap'>
                    {defaultData[0].avatar ? <img src={defaultData[0].avatar} alt="author" className="rounded-full" style={{ width: `${defaultData[0].avatarSize}rem`, height: `${defaultData[0].avatarSize}rem` }} /> : null}
                    {defaultData[0].author}
                  </CoverData>
                </div>
                <div style={{ height: `${defaultData[0].coverHeight}rem` }}>
                  <CoverImage src={defaultData[0].cover} bgColor={defaultData[0].bgColor} objectPosition={defaultData[0].objectPosition.filter((item: any) => item.flag === true)[0].value} />
                </div>
              </div> */}
            </div>
            <UnsplashSearch defaultData={defaultData} setDefaultData={setDefaultData} />
          </section>
        </div >
        <Footer />
      </main >
    </>
  )
}
