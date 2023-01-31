const getRandomNumber = (min, max) => {
  return parseInt(Math.random() * (Number(max) - Number(min) + 2));
};

const dummyTweets = [
  {
    id: 1,
    username: "tgarrity0",
    picture: `https://randomuser.me/api/portraits/women/${getRandomNumber(
      1,
      98
    )}.jpg`,
    content:
      "Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.\n\nCum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
    createdAt: "2022-02-24T16:17:47.000Z",
    updatedAt: "2022-02-24T16:17:47.000Z",
  },
  {
    id: 2,
    username: "harry00700",
    picture: `https://randomuser.me/api/portraits/women/98.jpg`,
    content:
      "Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.\n\nInteger ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.\n\nNam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.",
    createdAt: "2022-02-25T16:17:47.000Z",
    updatedAt: "2022-02-25T16:17:47.000Z",
  },
  {
    id: 3,
    username: "mcovell1",
    picture: `https://randomuser.me/api/portraits/women/${getRandomNumber(
      1,
      98
    )}.jpg`,
    content:
      "Phasellus in felis. Donec semper sapien a libero. Nam dui.\n\nProin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.",
    createdAt: "2022-02-26T16:17:47.000Z",
    updatedAt: "2022-02-26T16:17:47.000Z",
  },
  {
    id: 4,
    username: "bmaccardle3",
    picture: `https://randomuser.me/api/portraits/men/${getRandomNumber(
      1,
      98
    )}.jpg`,
    content:
      "Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
    createdAt: "2022-02-27T16:17:47.000Z",
    updatedAt: "2022-02-27T16:17:47.000Z",
  },
  {
    id: 5,
    username: "sricciardiello4",
    picture: `https://randomuser.me/api/portraits/women/${getRandomNumber(
      1,
      98
    )}.jpg`,
    content:
      "Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.",
    createdAt: "2022-02-28T16:17:47.000Z",
    updatedAt: "2022-02-28T16:17:47.000Z",
  },
];

export default dummyTweets;
