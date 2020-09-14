const experience = [
  {
    start: '09-2012',
    end: '07-2020',
    name: 'Applied Physics Researcher',
    location: 'Stanford University',
      description:
              'My research focussed on the development of new X-ray characterization techniques using LCLS, a large-scale X-ray experimentation facility. Due to the nature of this work, I spent the majority of my time analyzing and visualizing data with Python as well as communicating the results to stakeholders.<br><br>'
              + '-Developed and validated a regularized maximum likelihood estimation algorithm for signal deconvolution to simplify and increase the sensitivity of a common X-ray spectroscopy (report: arxiv.org/abs/2006.10914 code: github.com/dhigley6/PAX2). The algorithm is implemented as a custom scikit-learn estimator and uses cross validation to select the degree of regularization.<br><br>'
              + '-Led three large-scale experiments (10 people per team) and analyzed the Terabytes of image and time series data each experiment produced. One experiment demonstrated how to increase the efficiency by more than a million times of a common X-ray characterization technique.<br><br>'
              + '-Developed software and instrumentation enabling high resolution and accuracy femtosecond time- and polarization-resolved X-ray absorption spectroscopy. The software produces and shows diagnostic information on actively accumulating data using a distributed computing system. This technology has since been used by several different teams, resulting in publications in top journals.<br><br>'
              + '-Rapidly analyzed data for more than 18 several-day-long experiments at large-scale scientific facilities (analysis deadlines ranged from an hour to a day after data collection). Experiments focussed on understanding ultrafast dynamics in materials that could be used in better computers and resulted in more than 10 publications as a co-author.<br><br>'
              + '-Conducted numerical simulations of femtosecond material dynamics.<br><br>'
              + '-Design, assembled and tested soft ultrahigh vacuum X-ray and electron experimental apparatus<br><br>'
  },
  {
    start: '10-2009',
    end: '09-2012',
    name: 'Undergraduate Researcher',
    location: 'Colorado State University',
    description:
              '- Analyzed data for several different research projects'
              + '– Improved and extended a computational optical imaging technique through numerical and experimental studies, resulting in two publications as lead author<br><br>'
              + '- Worked in a cross-functional team (biomedical engineering and electrical engineering team members) on improving and testing optical biosensor chips<br><br>'
              + '- Assisted in design and layout of a microwave radiometer<br><br>'
              + '- Made website for a research group<br><br>'
  },
  {
    start: '06-2010',
    end: '08-2010',
    name: 'Summer Undergraduate Research Fellow',
    location:
              'NASA Jet Propulsion Laboratory',
    description:
              '- Analyzed and recorded data assessing the stability of a micorwave radiometer across temperature and time.',
  },
  {
    start: '09-2009',
    end: '01-2010',
    name: 'Tutor',
    location:
              'Women and Minorities in Engineering Program, Colorado State University',
    description:
              '- Tutored engineering students in math, physics and electrical engineering courses',
  },
];

export default experience;
