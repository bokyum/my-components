export interface MenuItem {
  label: string;
  link: string;

  children?: MenuItem[]; // 옵션 필드로 정의 (있거나 없을 수 있음)
}

export const menuLinks: MenuItem[] = [
  {
    label: "Infinite Scroll",
    link: "#",
    children: [
      {
        label: "Infinite Scroll With Intersection Observer",
        link: "/infinite-scroll/just-infinite-scroll",
      },
    ],
  },
  {
    label: "animation",
    link: "#",
    children: [
      {
        label: "bouncing",
        link: "#",
        children: [
          {
            label: "v0",
            link: "/animation/bouncing/v0",
          },
          {
            label: "v1",
            link: "/animation/bouncing/v1",
          },
        ],
      },
      {
        label: "Image Processing With Scroll",
        link: "/animation/image-processing-with-scroll",
      },
      {
        label: "Fade In",
        link: "/animation/fade-in",
      },
      {
        label: "background",
        link: "#",
        children: [
          {
            label: "v0",
            link: "/animation/background/v0",
          },
        ],
      },
    ],
  },
  {
    label: "dnd",
    link: "#",
    children: [
      {
        label: "v0",
        link: "/dnd/v0",
      },
      {
        label: "with motion",
        link: "#",
        children: [
          {
            label: "simple drag",
            link: "/dnd/with-motion/simple-drag",
          },
          {
            label: "carousel",
            link: "/dnd/with-motion/carousel",
          },
          {
            label: "reorder",
            link: "#",
            children: [
              {
                label: "v0",
                link: "/dnd/with-motion/reorder/v0",
              },

              {
                label: "v1",
                link: "/dnd/with-motion/reorder/v1",
              },
            ],
          },
        ],
      },
    ],
  },
  {
    label: "layout",
    link: "#",
    children: [
      {
        label: "with mosaic",
        link: "#",
        children: [
          {
            label: "v0",
            link: "/layout/with-mosaic/v0",
          },
        ],
      },
    ],
  },
];
