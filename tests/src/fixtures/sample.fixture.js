

export const sampleOne = {
  "SampleNumber":"12345",
  "PipelineVersion":"0.0.1",
  "Sequencer":"iontorrent",
  "KnowledgebaseVersion":"0.0.1",
  "DateGenerated":"06/11/2021 2:30PM EST",
  "CurrentMedications":[
    {
      "Drugs":[
        {
          "Generic":["Acetaminophen"],
          "Trade":["Tylenol"]
        }
      ],
      "TheraputicArea":["Pain Management"],
      "GeneInfo":[
        {
          "Gene":"FakeGene1",
          "Genotype":"WT/WT",
          "Phenotype":"Normal Metabolizer"
        },
        {
          "Gene":"FakeGene2",
          "Genotype":"WT/WT",
          "Phenotype":"Poor Metabolizer"
        }
      ],
      "GroupPhenotype":"Decreased Efficacy",
      "Action":["CAUTION"],
      "Recommendation":"Patients with this genotype are expected to have a Poor response to Tylenol. Physicians should follow FDA label recommendations."
    }
  ]
}

export const sampleTwo = {
  "SampleNumber":"54321",
  "PipelineVersion":"0.0.1",
  "Sequencer":"iontorrent",
  "KnowledgebaseVersion":"0.0.1",
  "DateGenerated":"06/11/2021 3:35PM EST",
  "CurrentMedications":[
    {
      "Drugs":[
        {
          "Generic":["Acetaminophen"],
          "Trade":["Tylenol"]
        }
      ],
      "TheraputicArea":["Pain Management"],
      "GeneInfo":[
        {
          "Gene":"FakeGene1",
          "Genotype":"WT/WT",
          "Phenotype":"Normal Metabolizer"
        },
        {
          "Gene":"FakeGene2",
          "Genotype":"WT/WT",
          "Phenotype":"Poor Metabolizer"
        }
      ],
      "GroupPhenotype":"Normal Response",
      "Action":["GO"],
      "Recommendation":"Patients with this genotype are expected to have a Normal response to Tylenol. Physicians should follow FDA label recommendations."
    }
  ]
}
