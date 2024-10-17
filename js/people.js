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
        { name: 'Peanut Wong', img: 'wong-peanut.webp', position: 'Research Assistant', description: 'She obtained her Bachelor’s Degree in Psychology in CUHK. She is interested in learning how people understand themselves in a world full of other human beings, and the inter- and intrapersonal manifestations of such understanding. Her undergraduate thesis examined the role of representation coherence in moderating the advantages of flexible perspective switching for emotion recognition.', email: 'peanut.cdclab@gmail.com', tel: '3943-3507'}
      ],
      HonStaff: [
        { name: 'Eunice Ho', img: 'ho-eunice.webp', position: 'Honorary Clinical Consultant', description: 'She is a clinical psychologist who enjoys working with children, adolescents, and their families. She is currently working with a group of children and their caregivers with adverse relational experiences. Her clinical and research interest lies in the development of trauma psychopathology and the contributive role that sociocognitive functioning plays in its formation.'},
        { name: 'Cathy Kwok', img: 'kwok-cathy.webp', position: 'Honorary Clinical Consultant', description: 'She is a clinical psychologist working in a residential care setting serving children and families with adverse childhood experiences. She is interested in understanding the developmental trajectory of trauma spectrum disorders, as well as the application and consolidation of a therapeutic approach for children that targets the dysfunctional self and other representations.'},
        { name: 'Alissa Ng', img: 'ng-alissa.webp', position: 'Honorary Clinical Consultant', description: 'During previous research studies, she explored the role of visuospatial perspective shifting in empathy and self-empathy. She is now a clinical psychologist working with at-risk adolescents in a community setting. There she continues her interest in exploring the processes and impact of how people relate with themselves and those around them.'},
        { name: 'Frankie Mak', img: 'mak-frankie.webp', position: 'Honorary Research Consultant', description: 'He obtained his Bachelor’s degree and M.Phil. degree in CUHK. He is interested in the cognitive underpinnings of mentalising ability and the situations that turn it on and off. With knowledge in these areas, he wants to develop low-intensity assessment and possible training tools to raise public awareness of different relational issues.' },
        { name: 'Harris Chung', img: 'chung-harris.webp', position: 'Honorary Research Consultant', description: 'He is interested in understanding the socio-cognitive process behinds human interaction. He has previously accomplished an undergraduate thesis examining the underlying implication of heart rate variability on self-esteem within a social context. Understanding how the world can be perceived in various perspectives is one of his primary curiosities. In his free time, he enjoys playing football and darts, taking film photos, and engaging in thought-provoking discussions with friends.'}
      ], 
      RPg: [
        { name: 'Kam Hei Hui', img: 'hui-kamhei.webp', position: 'M.Phil. in Psychology ', description: 'Obtaining his Bachelor’s degree in CUHK, he is passionate in knowing how people imagine their future. He hopes to boost people’s determination and confidence to pursue their goals through update of autobiographical knowledge and biofeedback.'},
        { name: 'Yan-Bin Xie', img: 'xie-yanbin.webp', position: 'Ph.D. in Psychology (Pre-candidacy)', description: 'She obtained her bachelor’s degree in Beijing Normal University. Her research interest lies in exploring the relationship between social interaction and people’s evaluation of themselves. She hopes to use experimental methods to explore issues related to clinical psychology and mental health, making more people "trust" psychology and psychotherapy. As an extraverted person, she enjoys socialising and being exposed to new things.'}
      ], 
      CP: [
        { name: 'Bianca Chan', img: 'chan-bianca.webp', position: 'Psy.D. in Clinical Psychology', description: 'She is a clinical psychologist working in the child & adolescent team of a psychiatric hospital. She is interested in working with adolescents with attachment difficulties, especially those with evolving borderline personality traits. She is currently studying the role of dissociation in adolescent mental health disorders. She is also a plant lover.' }, 
        { name: 'Daniel Chan', img: 'chan-daniel.webp', position: 'Psy.D. in Clinical Psychology', description: 'Working in the public sector, he provides psychological service for individuals and families in need. His research is aimed at enhancing the understanding of how adverse childhood experiences impact mental health in adulthood, with a focus on childhood trauma and self-regulation. In his free time, he enjoys all sorts of outdoor activities.' }, 
        { name: 'Diana Cheung', img: 'cheung-diana.webp', position: 'M.S.Sc. in Clinical Psychology', description: 'She received her bachelor’s and master’s degrees at the University of Surrey. She wishes to explore the interactions between childhood experiences and relationships with parents and trauma spectrum disorders in children. Her life outside of work includes trying out new hobbies and getting matcha lattes!' },
        { name: 'Agnes Lau', img: 'lau-agnes.webp', position: 'M.S.Sc. in Clinical Psychology', description: 'After completing her thesis on children’s interpretations of parental reactions to their emotions during her MA degree at CUHK, she is interested in deepening her understanding of parental interactions and childhood trauma. She wishes to explore the connection between individuals’ childhood experiences and their development. In her free time, she enjoys practising yoga and playing music.' },
        { name: 'Francesca Leventhal', img: 'leventhal-francesca.webp', position: 'M.S.Sc. in Clinical Psychology', description: 'In broad terms, she is interested in understanding the process of personal development and how individuals shape their sense of self. Particularly, she focuses on exploring how people make sense of the world around them. Through research, she delves into children’s stories as a mean to gain insight into the development of their sense of self.  She enjoys spending time with animals, being outdoors, and indulging in a cup of coffee at a cozy cafe.' }, 
        { name: 'Dickson Wong', img: 'wong-dickson.webp', position: 'M.S.Sc. in Clinical Psychology', description: 'He obtained his Bachelor’s degree at CUHK. He is interested in exploring psychopathology related to self and others, particularly how the sense of self and experience may shape a person’s development. In his free time, he enjoys playing table tennis, cycling, and reading for leisure.' }, 
        
      ],
      //MA: [
       // { name: 'xxx', img: 'xxx', position: 'M.A. in Psychology', description: 'description'}
      //],
      UG: [
        //{name: 'xxx', img: 'xxx.webp', position: 'Undergraduate Thesis Student', description: 'description'},
      ], 
      Alumni: [{ 
        degree: 'M.Phil./ Ph.D. in Psychology',
        years: [
          { year: '2023', people: 'Ph.D. : Yimei Zhang ; M.Phil. : Celia Siu'}, 
          { year: '2022', people: 'M.Phil. : Frankie Mak' }, 
          { year: '2021', people: 'M.Phil. : Alfred Lo' }, 
          { year: '2019', people: 'M.Phil. : Alissa Ng' }
        ]}, { 
        degree: 'M.S.Sc. in Clinical Psychology',
        years: [
          { year: '2024', people: 'Rachel Chong, Raymond Ho, Terry Lau, Kristin Ng, Tracy Tso, Charmaine Tsoi'}, 
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
          { year: '2024', people: 'Kyle Law, Davin Yeung' },
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
                <span class="position">
                Associate Professor <span class="position-affiliation">- CUHK</span>
                <br>Visiting Fellow <span class="position-affiliation"> - McLean Hospital & Harvard Medical School, 2023-24</span>
                <br>Associate Member <span class="position-affiliation">- Hong Kong Hub of Paediatric Excellence, Hong Kong Children’s Hospital & CUHK</span>
                <br>Clinical Psychologist
                </span>

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