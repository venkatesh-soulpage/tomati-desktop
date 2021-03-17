// import React, { useEffect, useState } from "react";
// // redux
// import * as Action from "_actions";
// import { connect } from "react-redux";
// import { withRouter, Link } from "react-router-dom";
// // react bootstrap
// import Error from "assets/img/Error.svg";
// import CustomModal from "components/CustomModal";
// // moment
// import moment from "moment";
// // bootstrap icons
// import { GeoAltFill } from "react-bootstrap-icons";

// const Index = (props) => {
//   const [search, setSearch] = useState("");
//   const [error, setError] = useState(false);
//   const [message, setMessage] = useState("");

//   var date = new Date();
//   var currentMonth = date.getMonth();

//   useEffect(() => {
//     props.dispatch(Action.userEvents());
//     if (props.auth.userData) {
//       props.dispatch(
//         Action.getUserLimits({
//           subscription_id: props?.auth?.userData?.transaction_id,
//         })
//       );
//     }
//   }, [props.auth.userData]);

//   console.log(props);
//   const { event, auth } = props;

//   let filteredEvents =
//     event &&
//     event.events.filter((event) => {
//       console.log(event);
//       return event.name.toLowerCase().indexOf(search.toLowerCase()) !== -1;
//     });

//   const handleAddEvent = () => {
//     const eventsPerMonth = event.events.filter((event) => {
//       if (moment(event.created_at).month() === currentMonth) {
//         return event;
//       }
//     });

//     if (!auth.userData.is_subscription_active) {
//       setMessage(
//         <div>
//           Your account is inactive, this might be a billing issue. Please
//           contact{" "}
//           <a target="_blank" href="mailto:support@tomati.app">
//             support@tomati.app
//           </a>
//         </div>
//       );
//       setError(true);
//     } else if (auth.limit.event_limit === eventsPerMonth.length) {
//       setMessage(
//         "You have 0 events left on your plan. To add new events upgrade your plan here."
//       );
//       setError(true);
//     } else {
//       props.history.push("/dashboard/addevent");
//     }
//   };

//   const handleSortByDate = (e) => {
//     console.log(e.target.value);
//     const val = e.target.value;
//     if (val === "date") {
//       var sortByDate =
//         event &&
//         event.events.sort((a, b) => {
//           return (
//             new Date(a.created_at).getTime() - new Date(b.created_at).getTime()
//           );
//         });

//       console.log(sortByDate);
//       filteredEvents = sortByDate;
//       console.log(filteredEvents);
//       return filteredEvents;
//     }
//     return filteredEvents;
//   };
//   console.log(filteredEvents, "filtered Events By data");

//   return (
//     <div className="pt-0 pr-3 pl-4 pb-3">
//       {/* stats */}
//       <div className="d-flex align-items-center">
//         <div className="">
//           <h3 className="font-weight-bold text-dark m-0">Event</h3>
//         </div>
//         <div className="ml-auto  mr-3">
//           <h4 className="lead m-0">Total Events: {event?.events.length}</h4>
//         </div>
//         <div className=" mr-3">
//           <button className="btn btn-dark btn-sm">
//             {auth.userData ? auth.userData.plan[0].plan : null}
//           </button>
//         </div>
//         <a className="btn btn-outline-dark btn-sm" data-cb-type="portal">
//           Change
//         </a>
//       </div>
//       <div
//         className="card px-4 py-3 shadow-sm mt-3"
//         style={{ borderRadius: 6 }}
//       >
//         <div className="d-flex align-items-center">
//           <div>
//             <button
//               onClick={handleAddEvent}
//               className="btn btn-danger rounded-pill"
//             >
//               + Add New Event
//             </button>
//           </div>
//           <div className="ml-auto mr-3">
//             <a className="btn btn-dark rounded-pill" data-cb-type="portal">
//               + Addons
//             </a>
//           </div>
//           <div>
//             <input
//               className="form-control"
//               type="text"
//               placeholder="Filter by search"
//               value={search}
//               onChange={(e) => setSearch(e.target.value)}
//             />
//           </div>
//         </div>
//       </div>

//       {/* warning */}
//       {/* <div class="alert alert-warning mt-3 mb-3" role="alert">
//         A simple warning alert—check it out!
//       </div> */}
//       {/* show outlets */}

//       {filteredEvents &&
//         filteredEvents.map((event, id) => {
//           return (
//             <div
//               key={id}
//               className="card px-4 py-4  mt-3"
//               style={{ borderRadius: 6 }}
//             >
//               <div className="d-flex align-items-center">
//                 <div>
//                   <h6 className="m-0 font-weight-bold">{event.name}</h6>
//                   <p className="m-0 mt-2  text-dark">
//                     <GeoAltFill className="mr-2" />
//                     {event.address}
//                   </p>
//                 </div>
//                 <div className="ml-auto mr-3">
//                   <Link
//                     to={{ pathname: "/dashboard/viewevent", state: event.id }}
//                   >
//                     <button className="btn btn-danger">View</button>
//                   </Link>
//                 </div>
//               </div>
//             </div>
//           );
//         })}
//       <CustomModal
//         show={error}
//         onHide={() => setError(false)}
//         message={message}
//         statusicon={Error}
//         button={
//           !auth?.userData?.is_subscription_active ? null : (
//             <a
//               className="btn btn-primary mt-3 rounded-pill px-4 py-2"
//               data-cb-type="portal"
//             >
//               Upgrade
//             </a>
//           )
//         }
//       />
//     </div>
//   );
// };

// function mapStateToProps(state) {
//   return {
//     event: state.event,
//     auth: state.auth,
//   };
// }

// export default withRouter(connect(mapStateToProps)(Index));
