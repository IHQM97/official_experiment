// =====================================================
// IMPORTS
// =====================================================
import { initJsPsych } from "jspsych";
import jsPsychPreload from "@jspsych/plugin-preload";
import jsPsychHtmlKeyboardResponse from "@jspsych/plugin-html-keyboard-response";
import jsPsychImageKeyboardResponse from "@jspsych/plugin-image-keyboard-response";
import jsPsychHtmlButtonResponse from "@jspsych/plugin-html-button-response";

// =====================================================
// MOTIF IMPORTS
// =====================================================
import MO1 from "url:./motifs/MO1_EH.png";
import MO2 from "url:./motifs/MO2_GC.png";
import MO3 from "url:./motifs/MO3_LP.png";
import MO4 from "url:./motifs/MO4_NR.png";
import MO5 from "url:./motifs/MO5_PST.png";
import MO6 from "url:./motifs/MO6_ZSK.png";

// =====================================================
// WORD IMAGE IMPORTS
// =====================================================
import Pos01 from "url:./words/positive/Pos_01.png";
import Pos02 from "url:./words/positive/Pos_02.png";
import Pos03 from "url:./words/positive/Pos_03.png";
import Pos04 from "url:./words/positive/Pos_04.png";
import Pos05 from "url:./words/positive/Pos_05.png";
import Pos06 from "url:./words/positive/Pos_06.png";
import Pos07 from "url:./words/positive/Pos_07.png";
import Pos08 from "url:./words/positive/Pos_08.png";
import Pos09 from "url:./words/positive/Pos_09.png";
import Pos10 from "url:./words/positive/Pos_10.png";

import Neg01 from "url:./words/negative/Neg_01.png";
import Neg02 from "url:./words/negative/Neg_02.png";
import Neg03 from "url:./words/negative/Neg_03.png";
import Neg04 from "url:./words/negative/Neg_04.png";
import Neg05 from "url:./words/negative/Neg_05.png";
import Neg06 from "url:./words/negative/Neg_06.png";
import Neg07 from "url:./words/negative/Neg_07.png";
import Neg08 from "url:./words/negative/Neg_08.png";
import Neg09 from "url:./words/negative/Neg_09.png";
import Neg10 from "url:./words/negative/Neg_10.png";

import Pseudo01 from "url:./words/pseudoword/Pseudo_01.png";
import Pseudo02 from "url:./words/pseudoword/Pseudo_02.png";
import Pseudo03 from "url:./words/pseudoword/Pseudo_03.png";
import Pseudo04 from "url:./words/pseudoword/Pseudo_04.png";
import Pseudo05 from "url:./words/pseudoword/Pseudo_05.png";
import Pseudo06 from "url:./words/pseudoword/Pseudo_06.png";
import Pseudo07 from "url:./words/pseudoword/Pseudo_07.png";
import Pseudo08 from "url:./words/pseudoword/Pseudo_08.png";
import Pseudo09 from "url:./words/pseudoword/Pseudo_09.png";
import Pseudo10 from "url:./words/pseudoword/Pseudo_10.png";

// =====================================================
// AMP CHARACTER IMPORTS
// =====================================================
import char01 from "url:./characters/char01.png";
import char02 from "url:./characters/char02.png";
import char03 from "url:./characters/char03.png";
import char04 from "url:./characters/char04.png";
import char05 from "url:./characters/char05.png";
import char06 from "url:./characters/char06.png";
import char07 from "url:./characters/char07.png";
import char08 from "url:./characters/char08.png";
import char09 from "url:./characters/char09.png";
import char10 from "url:./characters/char10.png";

// =====================================================
// WORD LISTS
// =====================================================
const positiveWords = ["joy","love","happy","delight","pleasure","smile","peace","comfort","hope","warmth"];
const negativeWords = ["anger","hate","pain","death","disgust","failure","fear","grief","violence","ugly"];
const pseudoWords = ["mavik","tulver","sarnet","plimor","grastin","veltor","nibrek","dorsiv","frintal","zavik"];

const wordImages = {
  joy: Pos01, love: Pos02, happy: Pos03, delight: Pos04, pleasure: Pos05,
  smile: Pos06, peace: Pos07, comfort: Pos08, hope: Pos09, warmth: Pos10,
  anger: Neg01, hate: Neg02, pain: Neg03, death: Neg04, disgust: Neg05,
  failure: Neg06, fear: Neg07, grief: Neg08, violence: Neg09, ugly: Neg10,
  mavik: Pseudo01, tulver: Pseudo02, sarnet: Pseudo03, plimor: Pseudo04,
  grastin: Pseudo05, veltor: Pseudo06, nibrek: Pseudo07,
  dorsiv: Pseudo08, frintal: Pseudo09, zavik: Pseudo10,
};

const ampCharacters = [char01,char02,char03,char04,char05,char06,char07,char08,char09,char10];

// =====================================================
// START EXPERIMENT
// =====================================================
window.addEventListener("DOMContentLoaded", () => {

  const jsPsych = initJsPsych();

  const participantID = jsPsych.randomization.randomID(8);
  jsPsych.data.addProperties({ participant_id: participantID });


  const listAssignment = Math.random() < 0.5 ? "A" : "B";
  jsPsych.data.addProperties({ list_assignment: listAssignment });

  const motifRegistry = [
    { id: "MO1", stimulus: MO1 },
    { id: "MO2", stimulus: MO2 },
    { id: "MO3", stimulus: MO3 },
    { id: "MO4", stimulus: MO4 },
    { id: "MO5", stimulus: MO5 },
    { id: "MO6", stimulus: MO6 },
  ];

  // ---------------------------------------------------
  // PRELOAD
  // ---------------------------------------------------
  const preload = {
    type: jsPsychPreload,
    images: [...motifRegistry.map(m => m.stimulus), ...Object.values(wordImages), ...ampCharacters],
  };
// ---------------------------------------------------
// WELCOME
// ---------------------------------------------------

const welcome = {
  type: jsPsychHtmlKeyboardResponse,
  stimulus: `
    <div style="max-width:800px; font-size:20px;">
      <p>Welcome to the experiment.</p>
      <p>Please read the instructions carefully and follow the on-screen prompts.</p>
      <p>Press any key to begin.</p>
    </div>
  `,
};
let demoData = {};

const demographics = {
  type: jsPsychHtmlButtonResponse,
  stimulus: `
    <h2>Consent & Eligibility</h2>

    <p>
      <label><input id="consent" type="checkbox"> I consent to take part in this study.</label>
    </p>

    <p>
      <label><input id="withdraw" type="checkbox"> I understand that I may withdraw at any time without penalty.</label>
    </p>

    <p>
      <label><input id="epilepsy" type="checkbox"> I confirm that I do not have photosensitive epilepsy.</label>
    </p>

    <p>
      <label><input id="chinese" type="checkbox"> I confirm that I do not read or understand Chinese characters.</label>
    </p>

    <hr>

    <p>
      <label>
        Participant code (if provided by the researcher):<br>
        <input id="participant_code" type="text" placeholder="e.g. B001" style="width:200px;">
      </label>
    </p>

    <hr>

    <p>
      <label>Age:
        <select id="age">
          <option value="">Select</option>
          ${Array.from({ length: 83 }, (_, i) => i + 18)
            .map(a => `<option value="${a}">${a}</option>`)
            .join("")}
        </select>
      </label>
    </p>

    <p>
      <label>Gender:
        <select id="gender">
          <option value="">Select</option>
          <option value="female">Female</option>
          <option value="male">Male</option>
          <option value="nonbinary">Non‑binary</option>
          <option value="prefer_not_to_say">Prefer not to say</option>
        </select>
      </label>
    </p>
  `,
  choices: ["Continue"],

  // Intercept the button click BEFORE jsPsych finishes the trial
  on_load: () => {
    const btn = document.querySelector(
      ".jspsych-html-button-response-button"
    );

    btn.addEventListener(
      "click",
      (e) => {
        const epilepsy = document.getElementById("epilepsy").checked;
        const chinese = document.getElementById("chinese").checked;

        // If either box is NOT ticked → block progress and end experiment
        if (!epilepsy || !chinese) {
          e.stopImmediatePropagation();
          e.preventDefault();

          jsPsych.endExperiment(`
            <p>Thank you for your interest.</p>
            <p>You do not meet the eligibility criteria for this study.</p>
          `);
        }
      },
      true // capture phase so we intercept before jsPsych's own handler
    );
  },

  // Only runs if the trial is actually allowed to finish (i.e. eligible)
  on_finish: () => {
    demoData.consent = document.getElementById("consent").checked;
    demoData.withdraw = document.getElementById("withdraw").checked;
    demoData.epilepsy = document.getElementById("epilepsy").checked;
    demoData.chinese = document.getElementById("chinese").checked;
    demoData.participant_code =
      document.getElementById("participant_code").value || null;
    demoData.age = document.getElementById("age").value || null;
    demoData.gender = document.getElementById("gender").value || null;

    jsPsych.data.write(demoData);

    if (demoData.participant_code) {
      jsPsych.data.addProperties({
        participant_id: demoData.participant_code,
        sample: "B"
      });
    } else {
      jsPsych.data.addProperties({
        sample: "A"
      });
    }
  }
};

// ---------------------------------------------------
// TIMING CONSTANTS (CONDITIONING PHASE)
// ---------------------------------------------------
const FIXATION_DURATION = 500;      // fixation cross
const MOTIF_DURATION = 900;         // CS (motif)
const WORD_RESPONSE_DEADLINE = 2000;
const US_DURATION = 500;            // affective stimulus
const ISI_DURATION = 300;           // blank/fixation between CS and US
const ITI_DURATION = 1000;          // inter-trial interval

  const MOTIF_HEIGHT = 250;
  const WORD_HEIGHT = 120;

  const AMP_PRIME_DURATION = 75;      // prime (motif)
const AMP_ISI_DURATION = 125;       // blank after prime
const AMP_TARGET_DURATION = 100;    // neutral target
const AMP_MASK_DURATION = 100;      // mask
const AMP_RESPONSE_DEADLINE = 2000; // optional
const AMP_ITI_DURATION = 750;

  // ---------------------------------------------------
  // CONDITIONING INSTRUCTIONS
  // ---------------------------------------------------
  const conditioningInstructions = {
    type: jsPsychHtmlKeyboardResponse,
    stimulus: `
      <div style="max-width:800px; font-size:20px;">
        <p>You will see a brief image followed by a letter string.</p>
        <p>Press <strong>F</strong> if the string is a real English word.<br>
        Press <strong>J</strong> if it is a non-word.</p>
        <p>Respond as quickly and accurately as possible.</p>
        <p>Press any key to begin.</p>
      </div>
    `,
  };

  // ---------------------------------------------------
  // CONDITIONING TRIAL GENERATION
  // ---------------------------------------------------
  const motifValenceMap =
    listAssignment === "A"
      ? { MO1:"positive", MO2:"negative", MO3:"positive", MO4:"negative", MO5:"positive", MO6:"negative" }
      : { MO1:"negative", MO2:"positive", MO3:"negative", MO4:"positive", MO5:"negative", MO6:"positive" };

  const shuffledMotifs = jsPsych.randomization.shuffle([...motifRegistry]);
  const highEvalMotifs = new Set(shuffledMotifs.slice(0,4).map(m => m.id));

  let conditioningTrials = [];

  motifRegistry.forEach(motif => {
    const isHigh = highEvalMotifs.has(motif.id);
    const evalN = isHigh ? 11 : 10;
    const nonN = isHigh ? 5 : 6;
    const valence = motifValenceMap[motif.id];

    for (let i = 0; i < evalN; i++) {
      const pool = valence === "positive" ? positiveWords : negativeWords;
      conditioningTrials.push({
        motif: motif.stimulus,
        motif_id: motif.id,
        word: jsPsych.randomization.sampleWithReplacement(pool, 1)[0],
        word_type: "real",
        valence,
      });
    }

    for (let i = 0; i < nonN; i++) {
      conditioningTrials.push({
        motif: motif.stimulus,
        motif_id: motif.id,
        word: jsPsych.randomization.sampleWithReplacement(pseudoWords, 1)[0],
        word_type: "nonword",
        valence: "nonword",
      });
    }
  });

  // ---------------------------------------------------
  // CONDITIONING TRIALS
  // ---------------------------------------------------
  const fixation = {
    type: jsPsychHtmlKeyboardResponse,
    stimulus: "+",
    choices: "NO_KEYS",
    trial_duration: FIXATION_DURATION,
  };

  const motifTrial = {
    type: jsPsychImageKeyboardResponse,
    stimulus: jsPsych.timelineVariable("motif"),
    stimulus_height: MOTIF_HEIGHT,
    maintain_aspect_ratio: true,
    choices: "NO_KEYS",
    trial_duration: MOTIF_DURATION,
  };

  const wordTrial = {
    type: jsPsychImageKeyboardResponse,
    stimulus: jsPsych.timelineVariable("word"),
    stimulus_height: WORD_HEIGHT,
    maintain_aspect_ratio: true,
    choices: ["f","j"],
    trial_duration: WORD_RESPONSE_DEADLINE,
    data: {
      phase: "conditioning",
      motif_id: jsPsych.timelineVariable("motif_id"),
      valence: jsPsych.timelineVariable("valence"),
      word: jsPsych.timelineVariable("word"),
      word_type: jsPsych.timelineVariable("word_type"),
    },
    on_start: trial => {
      trial.stimulus = wordImages[trial.stimulus];
    },
    on_finish: data => {
      data.correct =
        (data.word_type === "real" && data.response === "f") ||
        (data.word_type === "nonword" && data.response === "j");
    },
  };

  const iti = {
    type: jsPsychHtmlKeyboardResponse,
    stimulus: "",
    choices: "NO_KEYS",
    trial_duration: ITI_DURATION,
  };

  const conditioningTimeline = {
    timeline: [fixation, motifTrial, wordTrial, iti],
    timeline_variables: jsPsych.randomization.shuffle(conditioningTrials),
  };

  // ---------------------------------------------------
  // BREAK
  // ---------------------------------------------------
  const ampBreak = {
    type: jsPsychHtmlKeyboardResponse,
    stimulus: `
      <div style="max-width:800px; font-size:20px;">
        <p>You have completed the first part of the experiment.</p>
        <p>Please take a short break.</p>
        <p>Press any key to continue.</p>
      </div>
    `,
  };

  // ---------------------------------------------------
  // AMP INSTRUCTIONS
  // ---------------------------------------------------
  const ampInstructions = {
    type: jsPsychHtmlKeyboardResponse,
    stimulus: `
      <div style="max-width:800px; font-size:20px;">
        <p>You will see a brief image followed by a Chinese character.</p>
        <p>Please <strong>ignore the image</strong> and focus only on the character.</p>
        <p>Decide whether the character feels <strong>pleasant</strong> or <strong>unpleasant</strong>.</p>
        <p>Press <strong>F</strong> for pleasant.<br>
        Press <strong>J</strong> for unpleasant.</p>
        <p>Press any key to begin.</p>
      </div>
    `,
  };

  // ---------------------------------------------------
  // AMP TRIALS
  // ---------------------------------------------------
  let ampTrials = [];

  motifRegistry.forEach(motif => {
    const valence = motifValenceMap[motif.id];
    for (let i = 0; i < 15; i++) {
      ampTrials.push({
        motif: motif.stimulus,
        motif_id: motif.id,
        valence,
        character: jsPsych.randomization.sampleWithReplacement(ampCharacters, 1)[0],
      });
    }
  });

  const ampFixation = {
    type: jsPsychHtmlKeyboardResponse,
    stimulus: "+",
    choices: "NO_KEYS",
    trial_duration: FIXATION_DURATION,
  };

  const ampPrime = {
    type: jsPsychImageKeyboardResponse,
    stimulus: jsPsych.timelineVariable("motif"),
    stimulus_height: MOTIF_HEIGHT,
    maintain_aspect_ratio: true,
    choices: "NO_KEYS",
    trial_duration: AMP_PRIME_DURATION,
  };

  const ampMask = {
    type: jsPsychHtmlKeyboardResponse,
    stimulus: "####",
    choices: "NO_KEYS",
    trial_duration: AMP_MASK_DURATION,
  };

  const ampTarget = {
    type: jsPsychImageKeyboardResponse,
    stimulus: jsPsych.timelineVariable("character"),
    stimulus_height: WORD_HEIGHT,
    maintain_aspect_ratio: true,
    choices: ["f","j"],
    data: {
      phase: "AMP",
      motif_id: jsPsych.timelineVariable("motif_id"),
      conditioned_valence: jsPsych.timelineVariable("valence"),
      character: jsPsych.timelineVariable("character"),
    },
  };

  const ampTimeline = {
    timeline: [ampFixation, ampPrime, ampMask, ampTarget, iti],
    timeline_variables: jsPsych.randomization.shuffle(ampTrials),
  };

// ---------------------------------------------------
// MOTIF RATINGS (4 PAGES)
// ---------------------------------------------------

let ratingData = {};

// ---------- PAGE 1: SYMMETRY ----------
const motifRatings_symmetry = {
  type: jsPsychHtmlButtonResponse,
  stimulus: `
    <div id="ratings">
      <p>
        <strong>Symmetry</strong><br><br>
        Please rate each motif based on how symmetrical it appears.
        Symmetry refers to how balanced or evenly arranged the image looks,
        for example whether its parts mirror each other or feel evenly distributed. 
        There are no right or wrong answers.
        <br><br>
        (1 = not at all symmetrical, 5 = very symmetrical)
      </p>

      ${motifRegistry.map(m => `
        <div style="margin-bottom:20px;">
          <img src="${m.stimulus}" height="150"><br>
          ${[1,2,3,4,5].map(v =>
            `<label>
              <input type="radio" name="${m.id}_symmetry" value="${v}">
              ${v}
            </label>`
          ).join(" ")}
        </div>
      `).join("")}
    </div>
  `,
  choices: ["Continue"],
  on_button_click: () => {
    motifRegistry.forEach(m => {
      const sel = document.querySelector(`input[name="${m.id}_symmetry"]:checked`);
      ratingData[`${m.id}_symmetry`] = sel ? sel.value : null;
    });
  }
};

// ---------- PAGE 2: COMPLEXITY ----------
const motifRatings_complexity = {
  type: jsPsychHtmlButtonResponse,
  stimulus: `
    <div id="ratings">
      <p>
        <strong>Visual Complexity</strong><br><br>
        Please rate each motif based on how visually complex it appears.
        Complexity refers to how many visual elements the image contains
        and how detailed or intricate it looks overall.
        There are no right or wrong answers.
        <br><br>
        (1 = very simple, 5 = very complex)
      </p>

      ${motifRegistry.map(m => `
        <div style="margin-bottom:20px;">
          <img src="${m.stimulus}" height="150"><br>
          ${[1,2,3,4,5].map(v =>
            `<label>
              <input type="radio" name="${m.id}_complexity" value="${v}">
              ${v}
            </label>`
          ).join(" ")}
        </div>
      `).join("")}
    </div>
  `,
  choices: ["Continue"],
  on_button_click: () => {
    motifRegistry.forEach(m => {
      const sel = document.querySelector(`input[name="${m.id}_complexity"]:checked`);
      ratingData[`${m.id}_complexity`] = sel ? sel.value : null;
    });
  }
};

// ---------- PAGE 3: MEMORABILITY ----------
const motifRatings_memorability = {
  type: jsPsychHtmlButtonResponse,
  stimulus: `
    <div id="ratings">
      <p>
        <strong>Memorability</strong><br><br>
        Please rate each motif based on how easy you think it would be to remember.
        This refers to how likely the image is to stay in your mind based on its visual features,
        not on meaning or emotional response.
        There are no right or wrong answers.
        <br><br>
        (1 = very difficult to remember, 5 = very easy to remember)
      </p>

      ${motifRegistry.map(m => `
        <div style="margin-bottom:20px;">
          <img src="${m.stimulus}" height="150"><br>
          ${[1,2,3,4,5].map(v =>
            `<label>
              <input type="radio" name="${m.id}_memorability" value="${v}">
              ${v}
            </label>`
          ).join(" ")}
        </div>
      `).join("")}
    </div>
  `,
  choices: ["Continue"],
  on_button_click: () => {
    motifRegistry.forEach(m => {
      const sel = document.querySelector(`input[name="${m.id}_memorability"]:checked`);
      ratingData[`${m.id}_memorability`] = sel ? sel.value : null;
    });
  }
};

// ---------- PAGE 4: DISTINCTIVENESS ----------
const motifRatings_distinctiveness = {
  type: jsPsychHtmlButtonResponse,
  stimulus: `
    <div id="ratings">
      <p>
        <strong>Distinctiveness</strong><br><br>
        Please rate each motif based on how much it stands out visually compared to the others.
        Distinctiveness refers to how noticeable or visually striking the image is relative to the rest.
        There are no right or wrong answers.
        <br><br>
        (1 = does not stand out, 5 = stands out very strongly)
      </p>

      ${motifRegistry.map(m => `
        <div style="margin-bottom:20px;">
          <img src="${m.stimulus}" height="150"><br>
          ${[1,2,3,4,5].map(v =>
            `<label>
              <input type="radio" name="${m.id}_distinctiveness" value="${v}">
              ${v}
            </label>`
          ).join(" ")}
        </div>
      `).join("")}
    </div>
  `,
  choices: ["Continue"],
  on_button_click: () => {
    motifRegistry.forEach(m => {
      const sel = document.querySelector(`input[name="${m.id}_distinctiveness"]:checked`);
      ratingData[`${m.id}_distinctiveness`] = sel ? sel.value : null;
    });

    jsPsych.data.write(ratingData);
  }
};
/// ---------------------------------------------------
// MOTIF RANKING
// ---------------------------------------------------
let rankingData = {};

const motifRanking = {
  type: jsPsychHtmlButtonResponse,
  stimulus: `
    <div id="ranking">
      <p>
        <strong>Image Ranking</strong><br><br>
        Please rank the motifs according to how much they stood out to you overall during the task.
        This ranking should be based on visual noticeability or memorability,
        not on emotional response, pleasantness, or meaning. 
        There are no right or wrong answers.
        <br><br>
        (1 = stood out the most, 6 = stood out the least)
      </p>

      ${motifRegistry.map(m => `
        <div style="margin-bottom:15px;">
          <img src="${m.stimulus}" height="100"><br>
          <select id="${m.id}_rank">
            <option value="">Select</option>
            ${[1,2,3,4,5,6].map(v => `<option value="${v}">${v}</option>`).join("")}
          </select>
        </div>
      `).join("")}
    </div>
  `,
  choices: ["Finish"],

  on_button_click: () => {
    rankingData = {};
    motifRegistry.forEach(m => {
      rankingData[`${m.id}_rank`] =
        document.getElementById(`${m.id}_rank`).value || null;
    });

    jsPsych.data.write(rankingData);
  }
};   

   // ---------------------------------------------------
  // DEBRIEF
  // ---------------------------------------------------
  const debrief = {
    type: jsPsychHtmlKeyboardResponse,
    stimulus: `
      <div style="max-width:800px; font-size:20px;">
        <p><strong>Debrief</strong></p>
        <p>Thank you for taking part in this study. Your participation is greatly appreciated.</p>
        <p>Your responses will be kept anonymous and used for research purposes only.</p>
        <p>If you have any questions or concerns about the study, please contact the researcher using the details provided in the information sheet.</p>
        <p>Press any key to finish.</p>
      </div>
    `,
  };

// ---------------------------------------------------
// RUN
// ---------------------------------------------------

console.log({
  conditioningInstructions,
  conditioningTimeline,
  ampBreak,
  ampInstructions,
  ampTimeline,
  motifRatings_symmetry,
  motifRatings_complexity,
  motifRatings_memorability,
  motifRatings_distinctiveness,
  motifRanking,
  debrief
});

jsPsych.run(
  [
    preload,
    welcome,
    demographics,
    conditioningInstructions,
    conditioningTimeline,
    ampBreak,
    ampInstructions,
    ampTimeline,
    motifRatings_symmetry,
    motifRatings_complexity,
    motifRatings_memorability,
    motifRatings_distinctiveness,
    motifRanking,
    debrief
  ],
  {
    on_finish: async () => {
      const data = jsPsych.data.get().json();

      await fetch(
        "https://script.google.com/macros/s/AKfycbwFDUlhEelWdewt8Nb3-4JKDQ4wnTmKvxs8gj4zYOzf5ytaVOczNiE32RHX-drBTcebvw/exec",
        {
          method: "POST",
          mode: "no-cors",
          headers: { "Content-Type": "application/json" },
          body: data
        }
      );
    }
  }
);

// ⭐ FINAL REQUIRED CLOSURE — closes DOMContentLoaded
});
