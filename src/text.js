export const showcases = [
    {
      "link": "/projects/0090C4",
      "name": "0090C4",
      "desc": "A cipher with the distinguishing feature being an offset of 0x0090C4.",
      "keywords": "weez'd 2 k0090c4 cipher"
    },
    {
      "link": "/projects/bipher",
      "name": "Bipher",
      "desc": [
        `Variation of the `,
        <a href="/projects/keysmashCipher">Keysmash Cipher</a>,
        `, improving upon it by simply applying it twice.`
      ],
      "keywords": "keysmash cipher"
    },
    {
      "link": "/projects/caesarVariation",
      "name": "Caesar Variation",
      "desc": "This is the famous Caesar Cipher, but the change by 3 is replaced with an alternative.",
      "keywords": "cipher"
    },
    {
      "link": "/projects/continuousRegisterCipher",
      "name": "Continuous Register Cipher",
      "desc": "This cipher works by incrementing a counter per character it sees, then outputting the current value.",
      "keywords": "crc"
    },
    {
      "link": "/projects/hashKeyCipher",
      "name": "Hashed CRC",
      "desc": [
        `This cipher is a direct improvement over the `,
        <a href="/projects/keyedCRC">Keyed CRC</a>, 
        `, including a hash over the key-based security it offers.`
      ],
      "keywords": "continuous register cipher"
    },
    {
      "link": "/projects/hCRCRework",
      "name": "Hashed CRC: Reworked",
      "desc": [
        `Another iteration upon the CRC, with the base being the `,
        <a href="/projects/hashKeyCipher">Hashed CRC</a>,
        `, updated with an improved hashing algorithm.`
      ],
      "keywords": "continuous register cipher"
    },
    {
      "link": "/projects/K0090C4",
      "name": "Weez'd 2",
      "desc": [
        <a href="/projects/0090C4">0090C4</a>,
        `'s key-integrated alternative.`
      ],
      "keywords": "0090c4 cipher"
    },
    {
      "link": "/projects/keyedCRC",
      "name": "Keyed CRC",
      "desc": [
        `A key-based security improvement over the original  `,
        <a href="/projects/continuousRegisterCipher">Continuous Register Cipher</a>,
        `.`
      ],
      "keywords": "continuous register cipher"
    },
    {
      "link": "/projects/keysmashCipher",
      "name": "Keysmash Cipher",
      "desc": "The original cipher, that got us here.",
      "keywords": "bipher"
    },
    {
      "link": "/projects/poetry",
      "name": "Poems",
      "desc": "A collection of poems written by me, your loyal site administrator.",
      "keywords": "ignorance, someone else's panopticon"
    },
    {
      "link": "/projects/serverstalker",
      "name": "Minecraft Server Pinger",
      "desc": "A quick tool to check who is online on a specified Minecraft: Java Edition server, and a few more things.",
      "keywords": ""
    }
  ];

export default showcases;