import React from 'react'

const Addappoint = () => {
  const opds = ['Anatomy','Anesthesioogy and critical care','Ayush','Biochemistry','Burn & Plastic Surgery','Cardiology','Community Medicine & Family Medicine','CTVS','Dentistry','Dermatology','Endocrinology,Diabetes & Metabolism','ENT','Forensic Medicine & Toxicology','Gastroenterology','General Medicine','General Surgery','Hospital Administration','Medical Oncology/Hematology','Microbiology','Neonatology','Nephrology','Neurology','Neurosurgery','Nuclear Medicine','Nursing','Obsterics & Gynaecology','Opthalmology','Orthopedics','Pathology with Laboratory Medicine','Pediatrics','Pediatrics Surgery','Pharmacology','Phsyical Medicine & Rehabilitation','Physiology','Psychiatry','Pulmonary Medicine & Rehabilitation','Physiology','Psychiatry','Pulmonary Medicine & Critical Care','Radiodiagnosis','Radiotherapy'
,'Surgical Gastroentrology','Surgical Oncology','Transfusion Medicine & Blood','Trauma & Emergency','Urology']

   const opd = opds.map(d=>({
     "value":d,
     "label":d
   }))


  return (
    <div>
      {/* <form action="">
      <label htmlFor="exampleFormControlInput1">Select Opd</label>
      <Select autocomplete="off" class="form-control" id="exampleFormControlInput1" placeholder="Select Semister" options={opd} onChange={event=>handle1change(event)} defaultValue={c} />
      </form> */}
    </div>
  )
}

export default Addappoint