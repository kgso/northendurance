import React from "react"

const Schedule = () => {
  return (
    <>
      <iframe
        id="idZenPlannerFrame"
        style={{ width: "100%", height: "500px" }}
        title="ZenPlanner North Endurance Schedule"
        src="https://northendurance.zenplanner.com/zenplanner/portal/calendar.cfm?frame=true&amp;VIEW=week"
        frameborder="0"
      ></iframe>
      <script src="https://northendurance.zenplanner.com/zenplanner/skin/js/resize.js"></script>
    </>
  )
}

export default Schedule
