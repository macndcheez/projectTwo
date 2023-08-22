// layout.ejs logic for signup/login and log out options
// <!-- <% if (!user) { %>
//     <li class="nav-item">
//         <a class="nav-link" href="/signup">Sign Up</a>
//     </li>
//     <li class="nav-item">
//         <a class="nav-link" href="/login">Log In</a>
//     </li>
//   <% } else { %>
//     <li class="nav-item">
//         <a class="nav-link" href="/logout">Log Out</a>
//     </li>
//    <% } %> -->



// 

// document.querySelector('form').addEventListener('submit', function(event) {
//     event.preventDefault();

//     const duration = document.getElementById('calendarDuration').value;
//     let view;

//     const monthAdd = parseInt(duration);
//     const endDate = new Date();
//     endDate.setMonth(endDate.getMonth() + monthAdd);
//     view = {start: new Date(), end: endDate }

//     const calendarEl = document.getElementById('calendar');
//     const calendar = new FullCalendar.Calendar(calendarEl, {
//         initialView: view,
//     });
//     calendar.render();

// });



// <%- include ('layout') %>
// <h1>Start planning your event!</h1>

// <script>
//     document.addEventListener('DOMContentLoaded', function() {
//         let calendarEl = document.getElementById('calendar');

//         const currentDate = new Date();
//         const calendarDuration = <%= JSON.stringify(calendarDuration) %>;

        

//         let calendar = new FullCalendar.Calendar(calendarEl, {
//             headerToolBar: {center: 'dayGridMonth, timeGridWeek'},
//             initialView: 'dayGridMonth',
//             validRange: {
//                 start: currentDate,
//                 end: new Date(currentDate.getFullYear(), currentDate.getMonth() +)
//             }
//         })
//         calendar.render();
//     })
    
// </script>

// <div id="calendar"></div>


// <ul>
//     <% events.forEach( event => { %>
//         <li>
//             <%= event.eventName %>
//             <a href="/events/edit/<%= event.uniqueUrl %>?calendarDuration=<%= event.calendarDuration %>&eventName=<%= event.eventName %>"> Edit </a>
//             <a href="/events/delete/<%= event.uniqueUrl %>?calendarDuration=<%= event.calendarDuration %>&eventName=<%= event.eventName %>"> Delete </a>
//         </li>
//    <% }) %>
// </ul>






// <a href="/events/edit/<%= event.uniqueUrl %>"> Edit </a>
// <a href="/events/delete/<%= event._id %>" data-method="DELETE"> Delete </a>