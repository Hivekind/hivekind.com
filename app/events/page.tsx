import EventItem from "./event-item";

export default function EventsPage() {
  return (
    <main className="main-wrapper">
      <section className="work-section">
        <div className="padding-global">
          <div className="container-medium">
            <div className="padding-section-large">
              <div className="margin-bottom margin-xxlarge">
                <div className="text-align-center">
                  <div className="max-width-large align-center">
                    <div className="margin-bottom margin-small">
                      <h1>Hivekind Events</h1>
                    </div>
                    <p className="text-size-medium">
                      We host meetups at our office where we discuss software
                      development, product management, and a variety of other
                      topics that interest us. Come for the engaging discussions
                      (or food) and stay for the networking opportunities!
                    </p>
                  </div>
                </div>
              </div>
              <div className="event_component">
                <div className="event_list-wrapper">
                  <div className="event_list">
                    <EventItem
                      title="Ruby Tuesdays #107"
                      date="7 May 2024"
                      agendas={[
                        {
                          time: "7:30 - 8:00",
                          details:
                            "Registration & Welcome and intro to Ruby Tuesdays",
                        },
                        {
                          time: "8:00 - 8:30",
                          details:
                            "Anonoz: Introducing OyenCov: and a few of my random hacks in developing Rails apps",
                        },
                        {
                          time: "8:30 - 9:00",
                          details:
                            "Guoy: Instance Variable in an Object Shape World",
                        },
                        {
                          time: "9:00 - 9:30",
                          details: "Parking Lot / Today I Learned !!!",
                        },
                      ]}
                      recordingUrl="https://www.youtube.com/watch?v=XuucPsney-g"
                    />

                    <EventItem
                      title="Ruby Tuesdays #105"
                      date="5 March 2024"
                      agendas={[
                        {
                          time: "7:30 - 8:00",
                          details:
                            "Registration & Welcome and intro to Ruby Tuesdays",
                        },
                        {
                          time: "8:00 - 8:30",
                          details: "Hassanin Ahmed: Your app as a framework",
                        },
                        {
                          time: "8:30 - 9:00",
                          details: "Yow Chun: Hotwiring your rails app",
                        },
                        {
                          time: "9:00 - 9:30",
                          details: "Parking Lot / Today I Learned !!!",
                        },
                      ]}
                      recordingUrl="https://www.youtube.com/watch?v=hORNzvK9y2o"
                    />

                    <EventItem
                      title="Ruby Tuesdays #103"
                      date="5 December 2023"
                      agendas={[
                        {
                          time: "7:30 - 8:00",
                          details:
                            "Registration & Welcome and intro to Ruby Tuesdays",
                        },
                        {
                          time: "8:00 - 9:00",
                          details:
                            "2023 retrospective: Amree Zaid, Wan Zul, Helio Cola, and Yow Chun",
                        },
                        {
                          time: "9:00 - 9:30",
                          details: "Parking Lot / Today I Learned !!!",
                        },
                      ]}
                      recordingUrl="https://www.youtube.com/watch?v=klJPaXyAShs"
                    />

                    <EventItem
                      title="Ruby Tuesdays #101"
                      date="3 October 2023"
                      agendas={[
                        {
                          time: "7:30 - 8:00",
                          details:
                            "Registration & Welcome and intro to Ruby Tuesdays",
                        },
                        {
                          time: "8:00 - 8:30",
                          details:
                            "Guoy: Looks like a talk, sounds like a talk",
                        },
                        {
                          time: "8:30 - 9:00",
                          details: "Helio Cola: app subdomain routing",
                        },
                        {
                          time: "9:00 - 9:30",
                          details: "Parking Lot / Today I Learned !!!",
                        },
                      ]}
                      recordingUrl="https://www.youtube.com/watch?v=qWs-WE8Sv3Q"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
