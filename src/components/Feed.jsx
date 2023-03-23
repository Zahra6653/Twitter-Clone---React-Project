import React, { useEffect, useState } from "react";
import { RefreshIcon } from "@heroicons/react/outline";
import TweetBox from "./TweetBox";
import Tweet from "./Tweet";
import {UserAuth} from '../context/AuthContext'
import FakeTweets from "./FakeTweets";

// const tweets=[{
//   profileImg:'https://tse1.mm.bing.net/th?id=OIP.y-nGyqT5AwES8oqp344z4gHaHa&pid=Api&P=0',
//   username: "Zahra Sakti",
//   createdAt: 'Sun Mar 19 2023 11:02:56 GMT+0530 (India Standard Time)',
//   text: 'Hello People!!',
//   image: 'https://tse3.mm.bing.net/th?id=OIP.G_ZAazqbb09Qf6327NfZWwHaEK&pid=Api&P=0',
// }]

function Feed() {
  const {profile} = UserAuth();
  let tweet=profile.filter(e => e.active);
  const [localTweet,setlocaltweet] =useState(JSON.parse(localStorage.getItem('profile')));
  return (
    <div className="col-span-7 lg:col-span-5 border-x overflow-y-auto">
      <div className="flex items-center justify-between">
        <h1 className="p-5 pb=0 text-xl font-bold">Home</h1>
        <RefreshIcon
          className="mr-5 mt-5 h-8 w-8 cursor-pointer
        text-twitter transition-all duration-500 ease-out hover:rotate-180 active:scale-125"
        />
      </div>

      <div>
        <TweetBox setChange={setlocaltweet}/>
      </div>

      <div className="max-h-100 overflow-y-auto">
        {localTweet?.tweets.map((tweeet,id)=>
              <Tweet key={id} tweet={tweeet} username={tweet[0]?.username} profileImg={tweet[0]?.profileImg}/>
        )}

        <FakeTweets />
        
      </div>
    </div>
  );
}

export default Feed;
