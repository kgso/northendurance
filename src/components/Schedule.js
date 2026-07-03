import React from "react"

const Schedule = () => {
  const fallbackScheduleLink =
    "https://northendurance.sites.zenplanner.com/calendar.cfm?VIEW=week"

  return (
    <>
      <iframe
        id="idZenPlannerFrame"
        style={{ width: "100%", height: "500px", border: "none" }}
        title="ZenPlanner North Endurance Schedule"
        src="https://northendurance.zenplanner.com/zenplanner/portal/calendar.cfm?frame=true&amp;VIEW=week"
      ></iframe>

      <p className="mt-3 text-sm text-gray-600 text-center">
        If the schedule does not load, please click{" "}
        <a
          href={fallbackScheduleLink}
          target="_blank"
          rel="noopener noreferrer"
          className="underline"
        >
          here
        </a>
        .
      </p>

      <script src="https://northendurance.zenplanner.com/zenplanner/skin/js/resize.js"></script>
    </>
  )
}

export default Schedule
