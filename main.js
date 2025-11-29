function passOrFail(harmony) {
  const scale = ["do", "re", "mi", "fa", "sol", "la", "ti"];
  const chords = harmony.map(chord => chord.split(' '));
  
  for (let voice1 = 0; voice1 < 4; voice1++) {
      for (let voice2 = voice1 + 1; voice2 < 4; voice2++) {
          for (let chordIdx = 0; chordIdx < 3; chordIdx++) {
              const currentChord = chords[chordIdx];
              const nextChord = chords[chordIdx + 1];
              
              const note1 = currentChord[voice1];
              const note2 = currentChord[voice2];
              const nextNote1 = nextChord[voice1];
              const nextNote2 = nextChord[voice2];
              
              if (note1 === note2) {
                  if (nextNote1 === nextNote2) {
                      if (note1 !== nextNote1) {
                          return "Fail";
                      }
                  }
              }
          }
      }
  }
  
  return "Pass";
}