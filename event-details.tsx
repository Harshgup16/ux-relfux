"use client"

import {Clock, ChevronRight } from "lucide-react"
import { useState } from "react"

export default function EventDetails() {
  // const [activeDay, setActiveDay] = useState(1)
  const [activeDay, setActiveDay] = useState(1)
  const [hoverDay, setHoverDay] = useState(null)

  const days = [
    {
      day: 1,
      date: "27th May 2025",
      title: "Introduction to UX Design",
      facilitator: "Guest Speaker",
      initials: "GS",
      time: "12:00pm - 2:00pm",
      description:
        "Participants will learn the core principles of UX design, including design thinking, user personas, journey mapping, and the role of UX in building successful digital products and winning hackathons.",
      activities: [
        "The definition and importance of UI/UX",
        "Core principles that guide good design",
        "Real-world examples of effective UI/UX",
        "Career and business opportunities in UI/UX",
      ],
      duration: "90 mins of live learning + discussion",
    },
    {
      day: 2,
      date: "28th May 2025",
      title: "Figma & No-Code Tools Workshop",
      facilitator: "Ananya",
      initials: "A",
      time: "12:00pm - 2:00pm",
      description:
        "A hands-on workshop covering Figma for UI design, wireframing, and prototyping, and Framer for turning designs into interactive, responsive web pages.",
      activities: [
        "Design a basic interface for a product idea.",
        "Understand how to use Figma to create basic UI elements and wireframes",
        "Learn how to build interactive, responsive layouts in Framer",
        "Create a simple landing page or portfolio prototype",
      ],
      duration: "90 mins of demo + interactive design task",
    },
    {
      day: 3,
      date: "29th May 2025",
      title: "React & Tailwind CSS – Design to Code",
      facilitator: "Shubh",
      initials: "S",
      time: "12:00pm - 2:00pm",
      description:
        "Moving beyond basic web development, this session dives into React and Tailwind CSS — two of the most powerful tools in modern front-end development. Students will learn how to convert Figma designs into fully responsive, component-based web applications.",
      activities: [
        "Code a simple UI in React & Tailwind based on a provided Figma design.",
        "Fundamentals of React: components, props, and state",
        "Using Tailwind CSS for fast, responsive styling",
        "Structuring components to reflect Figma layouts",
        "Bringing interactivity to designs (buttons, forms, navigation)",
      ],
      duration: "90 mins of guided coding + live walkthrough",
    },
    {
      day: 4,
      date: "30th May 2025",
      title: "Hackathon Sprint (Individual)",
      facilitator: "UX Club Core Team",
      initials: "CT",
      time: "12:00pm - 2:00pm",
      description:
        "Moving beyond basic web development, this session bridges the gap between UI/UX design and front-end implementation. While the accompanying hackathon focuses solely on crafting polished interface designs in Figma, this workshop will empower students with the skills to translate those designs into fully responsive, interactive web components.",
      activities: [
        '3-hour online hackathon',
        "How to analyze and interpret Figma designs for development",
        "Structuring components to match the design system in Figma",
        "Bringing interactivity to UI elements (buttons, forms, navbars)",
        "Best practices for clean, maintainable front-end code",
      ],
      duration: "3-hour online hackathon",
    },
    {
      day: 5,
      date: "31st May 2025",
      title: "Guest Evaluation + AMA Session",
      facilitator: "Guest Speaker (To be Finalised)",
      initials: "GS",
      time: "12:00pm - 2:00pm",
      description:
        "Final projects will be showcased, followed by expert feedback, Q&A, and tips on presenting projects effectively at hackathons.",
      activities: ["Final presentation", "Expert evaluation", "Ask Me Anything session", "Prize distribution (₹2000)", "Final presentation + Evaluation + Ask Me Anything"],
      duration: "90 mins of feedback, interaction, and industry insight",
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      <section className="py-16 container mx-auto px-4 md:px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-6xl font-bold mb-2 tracking-tighter">ReflUX Schedule</h2>
          <p className="text-xl text-gray-500 mb-12">A Five Day Event</p>

          {/* Day selector */}
          {/* <div className="flex overflow-x-auto pb-4 mb-8 gap-2 md:gap-4 scrollbar-hide">
            {days.map((day) => (
              <button
                key={day.day}
                onClick={() => setActiveDay(day.day)}
                className={`flex-shrink-0 px-5 py-3 rounded-full transition-colors ${
                  activeDay === day.day ? "bg-purple-600 text-white" : "bg-gray-100 hover:bg-gray-200 text-gray-700"
                }`}
              >
                <span className="font-medium">Day {day.day}</span>
              </button>
            ))}
          </div> */}
          <div className="flex overflow-x-auto pb-4 mb-8 gap-2 md:gap-4 scrollbar-hide">
            {days.map((day) => (
              <button
                key={day.day}
                onClick={() => setActiveDay(day.day)}
                onMouseEnter={() => setHoverDay(day.day)}
                onMouseLeave={() => setHoverDay(null)}
                className={`flex-shrink-0 px-5 py-3 rounded-full transition-all duration-300 transform ${
                  activeDay === day.day 
                    ? "bg-purple-600 text-white shadow-md" 
                    : hoverDay === day.day
                    ? "bg-purple-100 text-purple-700 scale-105 shadow-sm" 
                    : "bg-gray-100 hover:bg-purple-50 text-gray-700"
                }`}
              >
                <span className="font-medium">Day {day.day}</span>
              </button>
            ))}
          </div>

          {/* Active day content */}
          {days.map((day) => (
            <div key={day.day} className={`${activeDay === day.day ? "block" : "hidden"}`}>
              <div className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-8 items-start">
                <div className="top-28 md:sticky md:top-28">
                  <div className="bg-gray-50 p-6 rounded-xl">
                    <h3 className="text-3xl font-bold text-purple-600">Day {day.day}</h3>
                    <p className="text-gray-500 mb-4">{day.date}</p>
                    <div className="h-1 w-16 bg-purple-600 mb-4"></div>
                    <div className="space-y-3">
                      <div className="flex items-center gap-2">
                        <Clock className="h-4 w-4 text-gray-500" />
                        <span className="text-gray-700">{day.time}</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-white border border-gray-100 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                  <div className="p-6 md:p-8">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="h-12 w-12 rounded-full bg-purple-100 flex items-center justify-center text-purple-600 font-medium">
                        {day.initials}
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-900">{day.facilitator}</h4>
                        <p className="text-sm text-gray-500">Facilitator</p>
                      </div>
                    </div>

                    <h3 className="text-2xl font-bold mb-4">{day.title}</h3>
                    <p className="text-gray-600 mb-6 leading-relaxed">{day.description}</p>

                    <div className="bg-gray-50 p-6 rounded-xl">
                      <h5 className="font-medium mb-4 flex items-center gap-2">
                        <span className="h-1 w-4 bg-purple-600 inline-block"></span>
                        Activity
                      </h5>
                      <ul className="space-y-3 mb-6">
                        {day.activities.map((activity, index) => (
                          <li key={index} className="flex items-start gap-3">
                            <ChevronRight className="h-5 w-5 text-purple-600 flex-shrink-0 mt-0.5" />
                            <span className="text-gray-700">{activity}</span>
                          </li>
                        ))}
                      </ul>
                      <div className="text-sm text-gray-500 italic">{day.duration}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}

          {/* Day navigation */}
          <div className="flex justify-between mt-8">
            <button
              onClick={() => setActiveDay((prev) => Math.max(prev - 1, 1))}
              disabled={activeDay === 1}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${
                activeDay === 1 ? "text-gray-300 cursor-not-allowed" : "text-gray-700 hover:bg-gray-100"
              }`}
            >
              <ChevronRight className="h-5 w-5 rotate-180" />
              <span>Previous Day</span>
            </button>

            <button
              onClick={() => setActiveDay((prev) => Math.min(prev + 1, days.length))}
              disabled={activeDay === days.length}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${
                activeDay === days.length ? "text-gray-300 cursor-not-allowed" : "text-gray-700 hover:bg-gray-100"
              }`}
            >
              <span>Next Day</span>
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}
