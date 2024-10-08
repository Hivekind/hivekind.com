import { CardList } from "@/components/card-list/card-list";
import "@/styles/casestudies.css";

export default function CasestudiesSection() {
  return (
    <section className="casestudies-section background-color-white">
      <div className="padding-global">
        <div className="container-large">
          <div className="padding-section-large">
            <div className="casestudies_component">
              <div className="margin-bottom margin-xxlarge align-left">
                <div className="max-width-large">
                  <div className="margin-bottom margin-small">
                    <h2>Case studies</h2>
                  </div>
                  <p className="text-size-medium">
                    Here’s a closer look at how we helped some of our clients
                    achieve success.
                  </p>
                </div>
              </div>

              <CardList
                cols={3}
                items={[
                  {
                    url: "/blog/solving-chatbot-woes-in-the-pre-llm-era",
                    imageUrl:
                      "https://cdn.prod.website-files.com/634908b04a6db34c4c0a6620/666a5d19948e182bf2575624_malaysia-carbon-score.png",
                    imageAltText: "Chatbot woes in the pre-LLM era",
                    imageInset: true,
                    topic: "MGBC",
                    title: "Solving chatbot woes in the pre-LLM era",
                    summary:
                      "Discover how a media company overcame early chatbot challenges in 2017, transforming customer service through innovative problem-solving.",
                  },
                  {
                    url: "/blog/implementing-response-streaming-from-llm",
                    imageUrl:
                      "https://cdn.prod.website-files.com/634908b04a6db34c4c0a6620/6388acbd65306f4c13b60071_essayjack.png",
                    imageAltText: "Streaming responses from LLM",
                    imageInset: true,
                    topic: "EssayJack",
                    title: "Implementing response streaming from LLMs",
                    summary:
                      "In this article, we look at how user experience on AI chat apps can be improved by implementing streaming responses from LLMs.",
                  },
                  {
                    url: "/blog/test-coverage-with-istanbul-nyc-for-typescript-projects",
                    imageUrl:
                      "https://cdn.prod.website-files.com/634908b04a6db34c4c0a6620/65c43c75467b848333929060_zonejam.png",
                    imageAltText: "Chatbot woes in the pre-LLM era",
                    imageInset: true,
                    topic: "ZoneJam",
                    title:
                      "Test Coverage with Istanbul (NYC) for TypeScript Projects",
                    summary:
                      "Learn how you can integrate Mocha with NYC to generate comprehensive test coverage reports for your TypeScript project.",
                  },
                ]}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
