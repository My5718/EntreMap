function calculateResults(SurveyResults) {
  let resultSet = {
    MotivationAtWork: {
      Intrinsic: 0,
      Identified: 0,
      Introjected: 0,
      ExternalMotivation: 0,
      Total: 0,
      Average: 0,
    },
    EntrepreneurialPassion: {
      Inventing: 0,
      Founding: 0,
      Developing: 0,
      Total: 0,
      Average: 0,
    },
    PassionScale: { HarmoniousPassion: 0, ObsessivePassion: 0 },
    IndividualEntrepreneurialOrientation: {
      RiskTaking: 0,
      Innovativeness: 0,
      Proactivity: 0,
      Total: 0,
      Average: 0,
    },
    EntrepreneurialSelfEfficacy: {
      Searching: 0,
      Planning: 0,
      Marshaling: 0,
      ImplementingPeople: 0,
      ImplementingFinancial: 0,
      AttitudeTowardVenturing: 0,
      Average: 0,
      Total: 0,
    },
    CognitiveFlexibility: { Total: 0, Average: 0 },
    Empathy: { Total: 0, Average: 0 },
    NeedToAchieve: { Total: 0, Average: 0 },
    Grit: { Total: 0, Average: 0 },
    GrowthOrientation: { Total: 0 },
    GrowthMindset: { Total: 0, Average: 0 },
    ToleranceForAmbiguity: { Total: 0, Average: 0 },
    Resilience: { Total: 0, Average: 0 },
    FearOfFailure: {
      AbilityToFundTheVenture: 0,
      PotentialOfTheIdea: 0,
      ThreatToSocialEsteem: 0,
      OpportunityCosts: 0,
      PersonalAbility: 0,
      FinancialSecurity: 0,
      VenturesCapacity: 0,
      Total: 0,
      Average: 0,
    },
    ImposterSyndrome: { Total: 0, Average: 0 },
    TheBigFive: {
      Extraversion: 0,
      Agreeableness: 0,
      Conscientiousness: 0,
      Neuroticism: 0,
      Openness: 0,
      Total: 0,
      Average: 0,
    },
    PsychologicalWellbeing: {
      Autonomy: 0,
      EnvironmentalMastery: 0,
      PersonalGrowth: 0,
      PositiveRelationswithOthers: 0,
      PurposeInLife: 0,
      SelfAcceptance: 0,
      Average: 0,
      Total: 0,
    },
  };

  for (let [key, value] of Object.entries(SurveyResults)) {
    //check the key if the question needs to be reverse scored
    if (key.slice(-1) === "r") {
      switch (value) {
        case "1":
          SurveyResults[key] = "5";
          break;
        case "2":
          SurveyResults[key] = "4";
          break;

        case "4":
          SurveyResults[key] = "2";
          break;
        case "5":
          SurveyResults[key] = "1";
          break;
        case 1:
          SurveyResults[key] = "5";
          break;
        case 2:
          SurveyResults[key] = "4";
          break;
        case 4:
          SurveyResults[key] = "2";
          break;
        case 5:
          SurveyResults[key] = "1";
          break;
      }
    }

    //check if the key includes the question Identifier
    if (key.includes("MAWINTRI")) {
      resultSet.MotivationAtWork.Intrinsic += parseInt(SurveyResults[key]);
      resultSet.MotivationAtWork.Total += parseInt(SurveyResults[key]);
    } else if (key.includes("MAWIDENT")) {
      resultSet.MotivationAtWork.Identified += parseInt(SurveyResults[key]);
      resultSet.MotivationAtWork.Total += parseInt(SurveyResults[key]);
    } else if (key.includes("MAWINTRO")) {
      resultSet.MotivationAtWork.Introjected += parseInt(SurveyResults[key]);
      resultSet.MotivationAtWork.Total += parseInt(SurveyResults[key]);
    } else if (key.includes("MAWEXTER")) {
      resultSet.MotivationAtWork.ExternalMotivation += parseInt(
        SurveyResults[key]
      );
      resultSet.MotivationAtWork.Total += parseInt(SurveyResults[key]);
    } else if (key.includes("EPINV")) {
      resultSet.EntrepreneurialPassion.Inventing += parseInt(
        SurveyResults[key]
      );
      resultSet.EntrepreneurialPassion.Total += parseInt(SurveyResults[key]);
    } else if (key.includes("EPFND")) {
      resultSet.EntrepreneurialPassion.Founding += parseInt(SurveyResults[key]);
      resultSet.EntrepreneurialPassion.Total += parseInt(SurveyResults[key]);
    } else if (key.includes("EPDEV")) {
      resultSet.EntrepreneurialPassion.Developing += parseInt(
        SurveyResults[key]
      );
      resultSet.EntrepreneurialPassion.Total += parseInt(SurveyResults[key]);
    } else if (key.includes("PSH")) {
      resultSet.PassionScale.HarmoniousPassion += parseInt(SurveyResults[key]);
    } else if (key.includes("PSO")) {
      resultSet.PassionScale.ObsessivePassion += parseInt(SurveyResults[key]);
    } else if (key.includes("IEPR")) {
      resultSet.IndividualEntrepreneurialOrientation.RiskTaking += parseInt(
        SurveyResults[key]
      );
      resultSet.IndividualEntrepreneurialOrientation.Total += parseInt(
        SurveyResults[key]
      );
    } else if (key.includes("IEPI")) {
      resultSet.IndividualEntrepreneurialOrientation.Innovativeness += parseInt(
        SurveyResults[key]
      );
      resultSet.IndividualEntrepreneurialOrientation.Total += parseInt(
        SurveyResults[key]
      );
    } else if (key.includes("IEPP")) {
      resultSet.IndividualEntrepreneurialOrientation.Proactivity += parseInt(
        SurveyResults[key]
      );
      resultSet.IndividualEntrepreneurialOrientation.Total += parseInt(
        SurveyResults[key]
      );
    } else if (key.includes("ESES")) {
      resultSet.EntrepreneurialSelfEfficacy.Searching += parseInt(
        SurveyResults[key]
      );
      resultSet.EntrepreneurialSelfEfficacy.Total += parseInt(
        SurveyResults[key]
      );
    } else if (key.includes("ESEP")) {
      resultSet.EntrepreneurialSelfEfficacy.Planning += parseInt(
        SurveyResults[key]
      );
      resultSet.EntrepreneurialSelfEfficacy.Total += parseInt(
        SurveyResults[key]
      );
    } else if (key.includes("ESEM")) {
      resultSet.EntrepreneurialSelfEfficacy.Marshaling += parseInt(
        SurveyResults[key]
      );
      resultSet.EntrepreneurialSelfEfficacy.Total += parseInt(
        SurveyResults[key]
      );
    } else if (key.includes("ESEIP")) {
      resultSet.EntrepreneurialSelfEfficacy.ImplementingPeople += parseInt(
        SurveyResults[key]
      );
      resultSet.EntrepreneurialSelfEfficacy.Total += parseInt(
        SurveyResults[key]
      );
    } else if (key.includes("ESEIF")) {
      resultSet.EntrepreneurialSelfEfficacy.ImplementingFinancial += parseInt(
        SurveyResults[key]
      );
      resultSet.EntrepreneurialSelfEfficacy.Total += parseInt(
        SurveyResults[key]
      );
      // } else if (key.includes("ATV")) {
      //   resultSet.EntrepreneurialSelfEfficacy.AttitudeTowardVenturing += parseInt(
      //     SurveyResults[key]
      //   );
    } else if (key.includes("CF")) {
      resultSet.CognitiveFlexibility.Total += parseInt(SurveyResults[key]);
    } else if (key.includes("EMP")) {
      resultSet.Empathy.Total += parseInt(SurveyResults[key]);
    } else if (key.includes("NTA")) {
      resultSet.NeedToAchieve.Total += parseInt(SurveyResults[key]);
    } else if (key.includes("GRI")) {
      resultSet.Grit.Total += parseInt(SurveyResults[key]);
    } else if (key.includes("GO")) {
      resultSet.GrowthOrientation.Total += parseInt(SurveyResults[key]);
    } else if (key.includes("GM")) {
      resultSet.GrowthMindset.Total += parseInt(SurveyResults[key]);
    } else if (key.includes("TFA")) {
      resultSet.ToleranceForAmbiguity.Total += parseInt(SurveyResults[key]);
    } else if (key.includes("RES")) {
      resultSet.Resilience.Total += parseInt(SurveyResults[key]);
    } else if (key.includes("FOFATFV")) {
      resultSet.FearOfFailure.AbilityToFundTheVenture += parseInt(
        SurveyResults[key]
      );
      resultSet.FearOfFailure.Total += parseInt(SurveyResults[key]);
    } else if (key.includes("FOFPI")) {
      resultSet.FearOfFailure.PotentialOfTheIdea += parseInt(
        SurveyResults[key]
      );
      resultSet.FearOfFailure.Total += parseInt(SurveyResults[key]);
    } else if (key.includes("FOFTSE")) {
      resultSet.FearOfFailure.ThreatToSocialEsteem += parseInt(
        SurveyResults[key]
      );
      resultSet.FearOfFailure.Total += parseInt(SurveyResults[key]);
    } else if (key.includes("FOFOC")) {
      resultSet.FearOfFailure.OpportunityCosts += parseInt(SurveyResults[key]);
      resultSet.FearOfFailure.Total += parseInt(SurveyResults[key]);
    } else if (key.includes("FOFPA")) {
      resultSet.FearOfFailure.PersonalAbility += parseInt(SurveyResults[key]);
      resultSet.FearOfFailure.Total += parseInt(SurveyResults[key]);
    } else if (key.includes("FOFFS")) {
      resultSet.FearOfFailure.FinancialSecurity += parseInt(SurveyResults[key]);
      resultSet.FearOfFailure.Total += parseInt(SurveyResults[key]);
    } else if (key.includes("FOFVC")) {
      resultSet.FearOfFailure.VenturesCapacity += parseInt(SurveyResults[key]);
      resultSet.FearOfFailure.Total += parseInt(SurveyResults[key]);
    } else if (key.includes("IS")) {
      resultSet.ImposterSyndrome.Total += parseInt(SurveyResults[key]);
    } else if (key.includes("TBFE")) {
      resultSet.TheBigFive.Extraversion += parseInt(SurveyResults[key]);
      resultSet.TheBigFive.Total += parseInt(SurveyResults[key]);
    } else if (key.includes("TBFA")) {
      resultSet.TheBigFive.Agreeableness += parseInt(SurveyResults[key]);
      resultSet.TheBigFive.Total += parseInt(SurveyResults[key]);
    } else if (key.includes("TBFC")) {
      resultSet.TheBigFive.Conscientiousness += parseInt(SurveyResults[key]);
      resultSet.TheBigFive.Total += parseInt(SurveyResults[key]);
    } else if (key.includes("TBFN")) {
      resultSet.TheBigFive.Neuroticism += parseInt(SurveyResults[key]);
      resultSet.TheBigFive.Total += parseInt(SurveyResults[key]);
    } else if (key.includes("TBFO")) {
      resultSet.TheBigFive.Openness += parseInt(SurveyResults[key]);
      resultSet.TheBigFive.Total += parseInt(SurveyResults[key]);
    }
    // else if (key.includes("")) {
    //   resultSet.PsychologicalWellbeing.Autonomy += parseInt(SurveyResults[key]);
    //   resultSet.PsychologicalWellbeing.Total += parseInt(SurveyResults[key]);
    // } else if (key.includes("")) {
    //   resultSet.PsychologicalWellbeing.EnvironmentalMastery += parseInt(
    //     SurveyResults[key]
    //   );
    //   resultSet.PsychologicalWellbeing.Total += parseInt(SurveyResults[key]);
    // } else if (key.includes("")) {
    //   resultSet.PsychologicalWellbeing.PersonalGrowth += parseInt(
    //     SurveyResults[key]
    //   );
    //   resultSet.PsychologicalWellbeing.Total += parseInt(SurveyResults[key]);
    // } else if (key.includes("")) {
    //   resultSet.PsychologicalWellbeing.PositiveRelationswithOthers += parseInt(
    //     SurveyResults[key]
    //   );
    //   resultSet.PsychologicalWellbeing.Total += parseInt(SurveyResults[key]);
    // } else if (key.includes("")) {
    //   resultSet.PsychologicalWellbeing.PurposeInLife += parseInt(
    //     SurveyResults[key]
    //   );
    //   resultSet.PsychologicalWellbeing.Total += parseInt(SurveyResults[key]);
    // } else if (key.includes("")) {
    //   resultSet.PsychologicalWellbeing.SelfAcceptance += parseInt(
    //     SurveyResults[key]
    //   );
    //   resultSet.PsychologicalWellbeing.Total += parseInt(SurveyResults[key]);
    // }
  }

  return { resultSet };
}

module.exports = calculateResults;
