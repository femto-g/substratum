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

export default function Home() {
  return (
    <div className="flex flex-col items-center w-full gap-10">
      <div className="flex flex-col items-center">
        <h1 className="text-5xl">Skip the boilerplate and start creating</h1>
        <p className="text-2xl">
          A full stack starter-kit to give you a headstart on your next project
        </p>
        <div className="flex flex-row">
          <a href="https://github.com/femto-g/substratum" target="_blank">
            <div className="flex flex-row items-center rounded-2xl bg-slate-600 px-2 py-1">
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
      <div className="flex flex-col gap-8">
        <div className="flex flex-row gap-8">
          <Card>
            <CardIcons>
              <IconImage src={icons.NEXT_JS} alt={"Nextjs"} />
              <IconImage src={icons.REACT} alt={"React"} />
              <IconImage src={icons.TAILWIND} alt={"Tailwind"} />
            </CardIcons>
            <CardContent>
              <CardHeader>Frontend</CardHeader>
              <CardText>
                Use Nextjs, TailwindCSS and ReactQuery to power your web UI
              </CardText>
              <CardFooter>Learn more</CardFooter>
            </CardContent>
          </Card>
          <Card>
            <CardIcons>
              <IconImage src={icons.EXPRESS} alt={"Express"} />
              <IconImage src={icons.TYPESCRIPT} alt={"Typescript"} />
              <IconImage src={icons.PRISMA} alt={"Prisma"} />
            </CardIcons>
            <CardContent>
              <CardHeader>Backend</CardHeader>
              <CardText>Create RESTful APIs using ExpressJS</CardText>
              <CardFooter>Learn more</CardFooter>
            </CardContent>
          </Card>
        </div>
        <div>
          <Card>
            <CardIcons>
              <IconImage src={icons.DOCKER} alt={"Docker"} />
              <IconImage src={icons.JEST} alt={"Jest"} />
              <IconImage src={icons.GITHUB_ACTIONS} alt={"Github actions"} />
            </CardIcons>
            <CardContent>
              <CardHeader>Whole project</CardHeader>
              <CardText>
                Streamline your development with Docker, Githooks, and Github
                Actions CI
              </CardText>
              <CardFooter>Learn more</CardFooter>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
