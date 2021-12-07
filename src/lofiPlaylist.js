import { v4 as uuidv4 } from 'uuid';

function lofiPlaylist() {
  return [
    {
      track: 'Conflicted',
      artist: 'Hanz',
      cover:
        'https://chillhop.com/wp-content/uploads/2021/08/b0bb2309d0c8fe0a32907ecddab689501b7de5cf-300x300.jpg',
      id: uuidv4(),
      active: true,
      color: ['#434E61', '#7DA7E8'],
      audio: 'https://mp3.chillhop.com/serve.php/?mp3=24642',
    },
    {
      track: 'Where The Sun Goes',
      artist: 'Delayde, anybodyy',
      cover:
        'https://chillhop.com/wp-content/uploads/2021/09/6a9ef8ac00e168d3308fdf9e336874c03fab829d-300x300.jpg',
      id: uuidv4(),
      active: false,
      color: ['#82CDF3', '#794BCC'],
      audio: 'https://mp3.chillhop.com/serve.php/?mp3=23188',
    },
    {
      track: 'Vitamin D',
      artist: 'fantompower',
      cover:
        'https://chillhop.com/wp-content/uploads/2021/07/3b73a510169f14c4af83ac4016e809917412702b-300x300.jpg',
      id: uuidv4(),
      active: false,
      color: ['#E0BBDC', '#C7D8DF'],
      audio: 'https://mp3.chillhop.com/serve.php/?mp3=22790',
    },
  ];
}

export default lofiPlaylist;
