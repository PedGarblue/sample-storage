const mongoose = require('mongoose');

const sampleSchema = mongoose.Schema(
  {
    SampleNumber: String,
    PipelineVersion: String,
    Sequencer: String,
    KnowledgebaseVersion: String,
    DateGenerated: String,
    CurrentMedications: [{
      Drugs: [{
        Generic: [String],
        Trade: [String],
      }],
      TheraputicArea: [String],
      GeneInfo: [{
        Gene: String,
        Genotype: String,
        Phenotype: String,
      }],
      GroupPhenotype: String,
      Action: [String],
      Recommendation: String,
    }],
  },
  {
    timestamps: true,
  }
);

const Sample = mongoose.model('Sample', sampleSchema);

module.exports = Sample;
