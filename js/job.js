const jobs = [
  {img: 'images/doctor.png', work: 'Doctor', salary: '$20000', Location: 'United State'},
  {img: 'images/teacher.png', work: 'Teacher', salary: '$2600', Location: 'Japan'},
  {img: 'images/cs.png', work: 'Computer Science', salary: '5000', Location: 'Rusia'},
  {img: 'images/doctor.png', work: 'Doctor', salary: '$20000', Location: 'Ukrain'},
  {img: 'images/teacher.png', work: 'Teacher', salary: '$2600', Location: 'India'},
  {img: 'images/cs.png', work: 'Computer Science', salary: '5000', Location: 'Singapore'},
  {img: 'images/doctor.png', work: 'Doctor', salary: '$20000', Location: 'United State'},
  {img: 'images/teacher.png', work: 'Teacher', salary: '$2600', Location: 'Japan'},
  {img: 'images/cs.png', work: 'Computer Science', salary: '5000', Location: 'Rusia'},
  {img: 'images/doctor.png', work: 'Doctor', salary: '$20000', Location: 'Ukrain'},
  {img: 'images/teacher.png', work: 'Teacher', salary: '$2600', Location: 'India'},
  {img: 'images/cs.png', work: 'Computer Science', salary: '5000', Location: 'Singapore'},
  {img: 'images/doctor.png', work: 'Doctor', salary: '$20000', Location: 'United State'},
  {img: 'images/teacher.png', work: 'Teacher', salary: '$2600', Location: 'Japan'},
  {img: 'images/cs.png', work: 'Computer Science', salary: '5000', Location: 'Rusia'},
  {img: 'images/doctor.png', work: 'Doctor', salary: '$20000', Location: 'Ukrain'},
  {img: 'images/teacher.png', work: 'Teacher', salary: '$2600', Location: 'India'},
  {img: 'images/cs.png', work: 'Computer Science', salary: '5000', Location: 'Singapore'},
]

const empty_box = `
      <div class="empty-box">
        <img src="images/giphy.gif">
        <h2 class="mt-2">Not found!</h2>
      </div>
`

const box = (img, work, salary, location) => {
  $('#job-container')[0].innerHTML += `
  <div class="box">
    <img src="${img}">
    <b>${work}</b>
    <div>
      <b>Salary : </b>
      <span>${salary}</span>
    </div>
    <div>
      <b>Location : </b>
      <span>${location}</span>
    </div>
    <button type="button" class="proposal">Proposal</button>
  </div>
  `
}

for (let i = 0; i < jobs.length; i ++) {
  box(jobs[i].img, jobs[i].work, jobs[i].salary, jobs[i].Location)
}

const result = text => {
  let result_text = text.toLowerCase()
  let filter_jobs = jobs.filter(job => {
    return job.Location.toLowerCase().includes(result_text)
  })
  if (filter_jobs.length > 0) {
    for (let i = 0; i < filter_jobs.length; i ++) {
      box(filter_jobs[i].img, filter_jobs[i].work, filter_jobs[i].salary, filter_jobs[i].Location)
    }
  } else {
    $('#job-container')[0].innerHTML = empty_box
  }
}

$('#search-result').on('keyup', function () {
  $('#job-container').empty()
  if ($(this).val() != '') {
    $('#search-icon').removeClass('fa-search')
    $('#search-icon').addClass('fa-xmark')
    result($(this).val())
    $('.fa-xmark').click(function () {
      $('#search-result').val('')
      $('#search-icon').addClass('fa-search')
      $('#search-icon').removeClass('fa-xmark')
      $('#job-container').empty()
      for (let i = 0; i < jobs.length; i ++) {
        box(jobs[i].img, jobs[i].work, jobs[i].salary, jobs[i].Location)
      }
    })
  } else {
    $('#search-icon').addClass('fa-search')
    $('#search-icon').removeClass('fa-xmark')
    $('#job-container').empty()
    for (let i = 0; i < jobs.length; i ++) {
      box(jobs[i].img, jobs[i].work, jobs[i].salary, jobs[i].Location)
    }
  }
})