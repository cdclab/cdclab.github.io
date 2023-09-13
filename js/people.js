export default {
  created () {
    document.title = 'Our Team | Experimental Psychopathology and Psychotherapy Laboratory | CUHK'
  },
  data() {
    return {
      imgpath: './img/members/',
      CD: {
        img: 'chiu.webp', description: 'Trained in applying experimental approaches to delineating the cognitive mechanisms of psychopathology, his clinical and research interests concern the impact of aversive interpersonal experience and stressful life events on mental health. His current research focuses on exploring the role of dysfunctional self-regulation (e.g., self-esteem, shame, and self-versus-other boundary) in stress-related disorders such as post-traumatic stress disorder, dissociative disorders, and borderline personality disorder.'
      },
      Staff: [
        { name: 'Peanut Wong', img: 'wong-peanut.webp', position: 'Research Assistant', description: 'She obtained her Bachelor’s degree in psychology at CUHK. Her undergraduate thesis was on the role of representation coherence in moderating the benefits of swift perspective taking during emotion recognition. She is interested in processes underlying how people regulate and represent themselves. She watches Haikyu!! to motivate herself.', email: 'peanut.cdclab@gmail.com', tel: '3943-3507'}
      ],
      HonStaff: [
        { name: 'Eunice Ho', img: 'ho-eunice.webp', position: 'Honorary Clinical Consultant', description: 'She is a clinical psychologist who enjoys working with children, adolescents, and their families. She is currently working with a group of children and their caregivers with adverse relational experiences. Her clinical and research interest lies in the development of trauma psychopathology and the contributive role that sociocognitive functioning plays in its formation.'},
        { name: 'Cathy Kwok', img: 'kwok-cathy.webp', position: 'Honorary Clinical Consultant', description: 'She is a clinical psychologist working in a residential care setting serving children and families with adverse childhood experiences. She is interested in understanding the developmental trajectory of trauma spectrum disorders, as well as the application and consolidation of a therapeutic approach for children that targets the dysfunctional self and other representations.'},
        { name: 'Alissa Ng', img: 'ng-alissa.webp', position: 'Honorary Clinical Consultant', description: 'During previous research studies, she explored the role of visuospatial perspective shifting in empathy and self-empathy. She is now a clinical psychologist working with at-risk adolescents in a community setting. There she continues her interest in exploring the processes and impact of how people relate with themselves and those around them.'},
        { name: 'Frankie Mak', img: 'mak-frankie.webp', position: 'Honorary Research Consultant', description: 'He obtained his Bachelor’s degree and M.Phil. degree in CUHK. He is interested in the cognitive underpinnings of mentalising ability and the situations that turn it on and off. With knowledge in these areas, he wants to develop low-intensity assessment and possible training tools to raise public awareness of different relational issues.' },
        { name: 'Harris Chung', img: 'chung-harris.webp', position: 'Honorary Research Consultant', description: 'He is interested in understanding the socio-cognitive process behinds human interaction. He has previously accomplished an undergraduate thesis examining the underlying implication of heart rate variability on self-esteem within a social context. Understanding how the world can be perceived in various perspectives is one of his primary curiosities. In his free time, he enjoys playing football and darts, taking film photos, and engaging in thought-provoking discussions with friends.'}
      ], 
      RPg: [
        { name: 'Yimei Zhang', img: 'zhang-yimei.webp', position: 'Ph.D. in Psychology (Post-candidacy)', description: 'She is interested in how people with mental illness, such as borderline personality disorder, build up intimate relationships, and how they communicate with their intimate partners. She hopes her research can help people with mental illness develop healthy relationships in which they can perceive support and acquire improvement.'}, 
        { name: 'Kam Hei Hui', img: 'hui-kamhei.webp', position: 'Ph.D. in Psychology (Pre-candidacy)', description: 'Obtaining his Bachelor’s degree in CUHK, he is passionate in knowing how people imagine their future. He hopes to boost people’s determination and confidence to pursue their goals through update of autobiographical knowledge and biofeedback.'}
      ], 
      CP: [
        { name: 'Bianca Chan', img: 'chan-bianca.webp', position: 'Psy.D. in Clinical Psychology', description: 'She is a clinical psychologist working in the child & adolescent team of a psychiatric hospital. She is interested in working with adolescents with attachment difficulties, especially those with evolving borderline personality traits. She is currently studying the role of dissociation in adolescent mental health disorders. She is also a plant lover.' }, 
        { name: 'Daniel Chan', img: 'chan-daniel.webp', position: 'Psy.D. in Clinical Psychology', description: 'Working in the public sector, he provides psychological service for individuals and families in need. His research is aimed at enhancing the understanding of how adverse childhood experiences impact mental health in adulthood, with a focus on childhood trauma and self-regulation. In his free time, he enjoys all sorts of outdoor activities.' }, 
        { name: 'Rachel Chong', img: 'chong-rachel.webp', position: 'M.S.Sc. in Clinical Psychology', description: 'Senior learner, research newbie. She loves stories of human experiences, which transformed into her research interest. She looks into children’s stories for more understanding of the development of ‘self’, especially their socioemotional development, and how childhood trauma affects one’s relational knowledge. Good food and cat cuddles made her day.' }, 
        { name: 'Raymond Ho', img: 'ho-raymond.webp', position: 'M.S.Sc. in Clinical Psychology', description: 'He is interested in understanding human in computational approaches. During his undergraduate study, he studied the relationship between self-referential source memory and emotional empathy. He is now studying the cognitive underpinnings in the development of emotional recognition. He likes statistics, science, and karaoke.' }, 
        { name: 'Terry Lau', img: 'lau-terry.webp', position: 'M.S.Sc. in Clinical Psychology', description: 'She obtained her bachelor’s degree and masters’ degree in psychology and clinical mental health sciences at the University College London. Her research interests lie in eating disorders and borderline personality disorder. Her personal interests lie in brewing coffee, and any activities that requires a strong heart. She might also be taller than you think.' }, 
        { name: 'Kristin Ng', img: 'ng-kristin.webp', position: 'M.S.Sc. in Clinical Psychology', description: 'Her research interest is in adverse life experience and the development of trauma-spectrum disorders and psychosis. She has always been fascinated by how temperament and environment shape a person’s relation to self, others and the world. She loves a nice hike, wine and true crime.' }, 
        { name: 'Tracy Tso', img: 'tso-tracy.webp', position: 'M.S.Sc. in Clinical Psychology', description: 'She previously obtained her MA degree in CUHK and completed a thesis about the interaction between affect and inner speech in people with schizophrenia. She is currently receiving training in clinical psychology and has a particular interest in the interaction between trauma and the development of self. She is also a yoga practitioner and a potter.' },
        { name: 'Charmaine Tsoi', img: 'tsoi-charmaine.webp', position: 'M.S.Sc. in Clinical Psychology', description: 'She obtained her Bachelor’s degree in CUHK. Her previous research studied the relationship between attachment styles and how one relates to the self. She enjoys working with children. She also loves eating, crocheting, and watching drama.' }
      ],
      //MA: [
       // { name: 'xxx', img: 'xxx', position: 'M.A. in Psychology', description: 'description'}
      //],
      UG: [
        {name: '(Under Construction)', img: 'member-1.webp', position: 'Undergraduate Thesis Student', description: '...'}
      ], 
      Alumni: [{ 
        degree: 'M.Phil./ Ph.D. in Psychology',
        years: [
          { year: '2023', people: 'Celia Siu' }, 
          { year: '2022', people: 'Frankie Mak' }, 
          { year: '2021', people: 'Alfred Lo' }, 
          { year: '2019', people: 'Alissa Ng' }
        ]}, { 
        degree: 'M.S.Sc. in Clinical Psychology',
        years: [
          { year: '2023', people: 'Jessica Chan, Celia Ho, Florence Huang' }, 
          { year: '2022', people: 'Cosy Cheung, Toby Jong, Jeff Kei, Janice Li, Jenny Ng, Kristine Yeung' }, 
          { year: '2021', people: 'Wingman Law, Ivy Leung, Alissa Ng, Melody Tsui' }, 
          { year: '2020', people: 'Eunice Ho, Stephanie Jor, Emily Sze' }, 
          { year: '2019', people: 'Nicky Chan, Pak Lun Ho' }, 
          { year: '2018', people: 'Daniel Cheng, Koey Cheung, Gina Siu, Victoria Tang' }, 
          { year: '2017', people: 'Ethiana Chung, Sarina Drummond, Cathy Kwok, Michael Ng' },       
          { year: '2016', people: 'Kahlen Chan, Sally Cheung, Yuki Ma' }       
        ]}, { 
        degree: 'M.A. in Psychology',
        years: [
          { year: '2023', people: 'Emily Chan, Karly Chuang, Christine Chow, Emily Chung, Emma Lau, Vickie Lee, Wayne Lee, Elaine To' }, 
          { year: '2022', people: 'Rachel Chan, Max Chau, Ching Ying Lee, Xiaojing Wu' }, 
          { year: '2021', people: 'Constance Ho, Jasmine Jim, Shirley So' }, 
          { year: '2020', people: 'Rachel Chong' }, 
          { year: '2015', people: 'Karen Chim, Ping Ping Chong, Yvonne Ngo, Baker Siu' } 
        ]}, { 
        degree: 'B.S.Sc. in Psychology',
        years: [
          { year: '2023', people: 'Hazel Lee, Isla Wong, Peanut Wong' }, 
          { year: '2022', people: 'Harris Chung, Raymond Ho, Joshua Yiu' }, 
          { year: '2021', people: 'Torres Chan, Celia Ho, Joey Leung, Hilvin Yu' }, 
          { year: '2020', people: 'Kam Hei Hui, Charmaine Tsoi' }, 
          { year: '2019', people: 'Celia Siu' }, 
          { year: '2018', people: 'Marshall Hui, Michelle Zhao' }, 
          { year: '2017', people: 'Alfred Lo, Alissa Ng' }, 
          { year: '2016', people: 'Koey Cheung, Sammi Li' }, 
          { year: '2015', people: 'Aretha Chui, Eunice Ho' } 
        ]}
      ]
    }
  },
  methods: {
    toggleTable(event) {
      if (event.target.nextElementSibling.style.maxHeight == '') {
        event.target.nextElementSibling.style.maxHeight = event.target.nextElementSibling.scrollHeight + 'px';
      } else { 
        event.target.nextElementSibling.style.maxHeight = '';
      }
      event.target.nextElementSibling.classList.toggle("opened");
      event.target.querySelector('i').classList.toggle("opened");
    }
  },
  template: `
      <main>
        <section class="banner">
          <div class="banner-overlay">
            <h1>Our Team</h1>
          </div>
        </section>
        <section class="body-container">
          <section id="chiu" class="wrapper-horizontal">
            <div class="title-box">Principal Investigator</div>
            <div class="flex-box">
              <div class="flex-250">
                <img :src="imgpath + CD.img" class="members-img" width="210" height="253">
              </div>
              <div class="flex-60">
                <span class="name">Prof. Chui-De CHIU</span>
                <span class="position">Associate Professor, CUHK <br> Clinical Psychologist</span>

                <p style="margin-bottom: 8px"><a href="https://www.researchgate.net/profile/Chui-De-Chiu" target="_blank">ResearchGate</a> | 
                <a href="https://orcid.org/0000-0002-6159-8531" target="_blank">ORCID</a> | 
                <a href="https://scholar.google.com.hk/citations?user=Bug4OBUAAAAJ" target="_blank">Google Scholar</a></p>

                <p>{{CD.description}}</p>

                <div class="contact-box">
                  <div><i class="fa fa-envelope"></i><span class="contact-info">cdchiu@cuhk.edu.hk</span></div>
                  <div><i class="fa fa-phone"></i><span class="contact-info">3943-6210</span></div>
                </div>
              </div>
            </div>
          </section>

          <section id="members" class="wrapper-horizontal">
            <div class="title-box">Staff</div>
            <div class="people-card flex-box" v-for="person in Staff">
              <div class="flex-250">
                <img :src="imgpath + person.img" class="members-img" width="210" height="210" loading="lazy">
              </div>
              <div class="flex-60">
                <span class="name">{{person.name}}</span>
                <span class="position">{{person.position}}</span>
                <p>{{person.description}}</p>

                <div class="contact-box">
                  <div><i class="fa fa-envelope"></i><span class="contact-info">{{person.email}}</span></div>
                  <div><i class="fa fa-phone"></i><span class="contact-info">{{person.tel}}</span></div>
                </div>
              </div>
            </div>

            <div class="title-box">Honorary Staff</div>
            <div class="people-card flex-box" v-for="person in HonStaff">
              <div class="flex-250">
                <img :src="imgpath + person.img" class="members-img" width="210" height="210" loading="lazy">
              </div>
              <div class="flex-60">
                <span class="name">{{person.name}}</span>
                <span class="position">{{person.position}}</span>
                <p>{{person.description}}</p>
              </div>
            </div>

            <div class="title-box">Research-track Postgraduates</div>
            <div class="people-card flex-box" v-for="person in RPg">
              <div class="flex-250">
                <img :src="imgpath + person.img" class="members-img" width="210" height="210" loading="lazy">
              </div>
              <div class="flex-60">
                <span class="name">{{person.name}}</span>
                <span class="position">{{person.position}}</span>
                <p>{{person.description}}</p>
              </div>
            </div>

            <div class="title-box">Clinical-track Postgraduates</div>
            <div class="people-card flex-box" v-for="person in CP">
              <div class="flex-250">
                <img :src="imgpath + person.img" class="members-img" width="210" height="210" loading="lazy">
              </div>
              <div class="flex-60">
                <span class="name">{{person.name}}</span>
                <span class="position">{{person.position}}</span>
                <p>{{person.description}}</p>
              </div>
            </div>
<!--
            <div class="title-box">Taught Postgraduates</div>
            <div class="people-card flex-box" v-for="person in MA">
              <div class="flex-250">
                <img :src="imgpath + person.img" class="members-img" width="210" height="210" loading="lazy">
              </div>
              <div class="flex-60">
                <span class="name">{{person.name}}</span>
                <span class="position">{{person.position}}</span>
                <p>{{person.description}}</p>
              </div>
            </div>
-->
<!--
            <div class="title-box">Undergraduate Thesis Students</div>
            <div class="people-card flex-box" v-for="person in UG">
              <div class="flex-250">
                <img :src="imgpath + person.img" class="members-img" width="210" height="210" loading="lazy">
              </div>
              <div class="flex-60">
                <span class="name">{{person.name}}</span>
                <span class="position">{{person.position}}</span>
                <p>{{person.description}}</p>
              </div>
            </div>
-->
            <div class="title-box">Alumni</div>
            <div class="toggle-section" v-for="degree in Alumni">
              <p class="toggleBtn" @click="toggleTable($event)"><i class="fa fa-chevron-right toggle-icon"></i>{{degree.degree}}</p>
              <div class="toggle-box">
                <table class="alumni-table">
                  <colgroup>
                    <col style="width:20%">
                    <col style="width:80%">
                  </colgroup> 
                  <thead>
                    <tr>
                      <th>Year</th>
                      <th>Name</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="year in degree.years">
                      <td>{{year.year}}</td>
                      <td>{{year.people}}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div class="toggle-section">
              <p class="toggleBtn" @click="toggleTable($event)"><i class="fa fa-chevron-right toggle-icon"></i>Other student helpers</p>
              <div class="toggle-box">
                (Under construction...)
              </div>
            </div>

            <p>* sorted in alphabetical order of surname</p>
          </section>
        </section>
      </main>`}