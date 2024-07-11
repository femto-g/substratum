"use client";

import Card from "@/components/card/Card";
import CardContent from "@/components/card/CardContent";
import CardHeader from "@/components/card/CardHeader";
import CardIcons from "@/components/card/CardIcons";
import CardText from "@/components/card/CardText";
import CardFooter from "@/components/card/CardFooter";
import Image from "next/image";
import IconImage from "@/components/image/IconImage";
import icons from "@/assets/icons";
import Link from "next/link";
import useResponsiveRender from "@/hooks/useResponsiveRender";
import useBreakpoint from "@/hooks/useBreakpoint";

export default function Home() {
  const render = useResponsiveRender();
  const mediumScreen = useBreakpoint("md");
  return (
    <div className="w-full">
      <div className="flex flex-col items-center gap-10">
        <div className="flex flex-col items-center gap-5 pt-5">
          <h1 className="text-5xl font-bold text-center">
            Skip the boilerplate and start creating
          </h1>
          <p className="text-2xl text-center">
            A full stack starter-kit to give you a headstart on your next
            project
          </p>
        </div>
        <div className="flex flex-row">
          <a href="https://github.com/femto-g/substratum" target="_blank">
            <div className="flex flex-row items-center rounded-2xl bg-slate-400 px-2 py-1 shadow-md gap-1 hover:border hover:border-black hover:m-[-1px]">
              <IconImage
                src={icons.GITHUB}
                alt="Get started on github"
                height={30}
                width={30}
              />
              <p>Get Started on Github</p>
            </div>
          </a>
        </div>
      </div>
      <div className="flex flex-col items-center gap-8 mb-10 m-auto max-w-[90%] pt-10">
        <div className="flex flex-col md:flex-row flex-wrap gap-10 max-w-screen-lg">
          <Card className="w-[80%] md:flex-1 mx-auto md:min-h-full">
            <CardIcons>
              <IconImage src={icons.NEXT_JS} alt={"Nextjs"} />
              <IconImage src={icons.REACT} alt={"React"} />
              <IconImage src={icons.TAILWIND} alt={"Tailwind"} />
            </CardIcons>
            <CardContent>
              <CardHeader>A powerful frontend toolkit</CardHeader>
              <CardText>
                A modern frontend development stack that combines the best of
                React, Next.js, and TailwindCSS to make building beautiful,
                interactive web applications easier than ever.
              </CardText>
              <CardFooter>Learn more</CardFooter>
            </CardContent>
          </Card>
          <Card className="w-[80%] md:flex-1 mx-auto md:min-h-full">
            <CardIcons>
              <IconImage src={icons.EXPRESS} alt={"Express"} />
              <IconImage src={icons.TYPESCRIPT} alt={"Typescript"} />
              <IconImage src={icons.PRISMA} alt={"Prisma"} />
            </CardIcons>
            <CardContent>
              <CardHeader>Robust tools for your backend</CardHeader>
              <CardText>
                A modern backend development stack that combines the best of
                ExpressJS, Prisma ORM, and TypeScript to make building robust,
                scalable, and type-safe web applications easier than ever.
              </CardText>
              <CardFooter>Learn more</CardFooter>
            </CardContent>
          </Card>
        </div>
        <div>
          <Card className="w-[80%] m-auto">
            <CardIcons>
              <IconImage src={icons.DOCKER} alt={"Docker"} />
              <IconImage src={icons.JEST} alt={"Jest"} />
              <IconImage src={icons.GITHUB_ACTIONS} alt={"Github actions"} />
            </CardIcons>
            <CardContent>
              <CardHeader>A modern development workflow</CardHeader>
              <CardText>
                Streamline your development with Docker, Jest, ESLint, Husky,
                and Github Actions CI to make building, testing, and deploying
                web applications easier than ever.
              </CardText>
              <CardFooter>Learn more</CardFooter>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
