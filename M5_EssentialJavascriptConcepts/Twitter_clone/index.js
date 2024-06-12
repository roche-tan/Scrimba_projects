import { tweetsData } from "./data.js";
import { v4 as uuidv4 } from "https://jspm.dev/uuid";

document.addEventListener("click", function (e) {
  if (e.target.dataset.like) {
    // console.log(e.target.dataset.like);
    handleLikeClick(e.target.dataset.like);
  } else if (e.target.dataset.retweet) {
    // console.log(e.target.dataset.retweet);
    handleRetweetClick(e.target.dataset.retweet);
  } else if (e.target.dataset.reply) {
    handleReplyClick(e.target.dataset.reply);
  } else if (e.target.id === "tweet-btn") {
    handleTweetBtnClick();
  }
});

function handleLikeClick(tweetId) {
  const targetTweetObj = tweetsData.filter(function (tweet) {
    return tweet.uuid === tweetId;
  })[0];

  if (!targetTweetObj.isLiked) {
    targetTweetObj.likes++;
    // targetTweetObj.isLiked = true;
  } else {
    targetTweetObj.likes--;
    // targetTweetObj.isLiked = false;
  }
  targetTweetObj.isLiked = !targetTweetObj.isLiked; //inverts state (from true to false, false to true)
  // console.log(targetTweetObj);
  render(); //to see update data in html
}

function handleRetweetClick(tweetId) {
  const targetTweetObj = tweetsData.filter(function (tweet) {
    return tweet.uuid === tweetId;
  })[0];

  if (targetTweetObj.isRetweeted) {
    targetTweetObj.retweets--;
  } else {
    targetTweetObj.retweets++;
  }

  targetTweetObj.isRetweeted = !targetTweetObj.isRetweeted;
  render();
}

// show/hide replies when message icon is clicked
function handleReplyClick(replyId) {
  document.getElementById(`replies-${replyId}`).classList.toggle("hidden");
}

function handleTweetBtnClick() {
  const tweetInput = document.getElementById("tweet-input");

  if (tweetInput.value) {
    tweetsData.unshift({
      handle: `@Scrimba 💎`,
      profilePic: `images/scrimbalogo.png`,
      likes: 0,
      retweets: 0,
      tweetText: tweetInput.value,
      replies: [],
      isLiked: false,
      isRetweeted: false,
      uuid: uuidv4(),
    });
    tweetInput.value = "";
    render();
  }
}

function getFeedHtml() {
  let feedHtml = ``;

  tweetsData.forEach(function (tweet) {
    let likeIconClass = "";

    if (tweet.isLiked) {
      // console.log("isLiked");
      likeIconClass = "liked";
    }

    let retweetIconClass = "";

    if (tweet.isRetweeted) {
      retweetIconClass = "retweeted";
    }

    let repliesHtml = "";

    // check if tweet has replies and log its uuid
    if (tweet.replies.length > 0) {
      // iterate through the replies and add HTM to repliesHtml
      tweet.replies.forEach(function (tweetReply) {
        repliesHtml += `
      <div class="tweet-reply">
        <div class="tweet-inner">
          <img src="${tweetReply.profilePic}" class="profile-pic">
          <div>
            <p class="handle">${tweetReply.handle}</p>
            <p class="tweet-text">${tweetReply.tweetText}</p>
          </div>
        </div>
      </div>
      `;
      });
    }
    feedHtml += `
    <div class="tweet">
    <div class="tweet-inner">
        <img src="${tweet.profilePic}" class="profile-pic">
        <div>
            <p class="handle">${tweet.handle}</p>
            <p class="tweet-text">${tweet.tweetText}</p>
            <div class="tweet-details">
                <span class="tweet-detail">
                    <i class="fa-regular fa-comment-dots" data-reply=${tweet.uuid}></i>
                    ${tweet.replies.length}
                </span>
                <span class="tweet-detail">
                    <i class="fa-solid fa-heart ${likeIconClass}" data-like=${tweet.uuid} ></i>
                    ${tweet.likes}
                </span>
                <span class="tweet-detail">
                    <i class="fa-solid fa-retweet ${retweetIconClass}" data-retweet=${tweet.uuid}></i>
                    ${tweet.retweets}
                </span>
            </div>   
        </div>            
    </div>
     <div class="hidden" id="replies-${tweet.uuid}">
        ${repliesHtml} 
    </div>  
</div>
  `;
  });
  // console.log(feedHtml);
  return feedHtml;
}

function render() {
  document.getElementById("feed").innerHTML = getFeedHtml();
}

render();
