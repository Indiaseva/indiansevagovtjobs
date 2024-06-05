$(document).ready(function() {
  // Sample job data from the internet
  const jobData = [
    {
      organization: "Union Public Service Commission (UPSC)",
      jobTitle: "Indian Administrative Service (IAS) Officer",
      category: "Civil Services",
      location: "All India",
      isApplied: !true,
      applicants: 15,
      applyURL: "https://upsc.gov.in/examinations/active-exams"
    },
    {
      organization: "Staff Selection Commission (SSC)",
      jobTitle: "Combined Graduate Level (CGL) Exam",
      category: "Government Jobs",
      location: "All India",
      isApplied: true,
      applicants: 25,
      applyURL: "https://example.com/apply/ssc-cgl"
    },
    {
      organization: "Indian Railways",
      jobTitle: "Railway Recruitment Board (RRB) Exam",
      category: "Railway Jobs",
      location: "All India",
      isApplied: false,
      applicants: 0,
      applyURL: "https://indianrailways.gov.in/railwayboard/view_section.jsp?lang=0&id=0,7,1281"
    },
    {
      organization: "Banking Personnel Selection (BPS)",
      jobTitle: "Probationary Officer (PO) Exam",
      category: "Banking Jobs",
      location: "All India",
      isApplied: true,
      applicants: 15,
      applyURL: "https://example.com/apply/bps-po"
    },
    {
      organization: "Defence Research and Development Organisation (DRDO)",
      jobTitle: "Scientist/Engineer Exam",
      category: "Defence Jobs",
      location: "All India",
      isApplied: false,
      applicants: 0,
      applyURL: "https://affairscloud.com/jobs/defence-jobs/"
    },
    {
      organization: "Indian Navy",
      jobTitle: "Officer Entry Exam",
      category: "Defence Jobs",
      location: "All India",
      isApplied: false,
      applicants: 0,
      applyURL: "https://affairscloud.com/jobs/defence-jobs/"
    },
    {
      organization: "Indian Army",
      jobTitle: "Technical Entry Scheme (TES) Exam",
      category: "Defence Jobs",
      location: "All India",
      isApplied: true,
      applicants: 10,
      applyURL: "https://affairscloud.com/jobs/defence-jobs/"
    },
    {
      organization: "Central Reserve Police Force (CRPF)",
      jobTitle: "Constable Exam",
      category: "Defence Jobs",
      location: "All India",
      isApplied: false,
      applicants: 0,
      applyURL: "https://affairscloud.com/jobs/defence-jobs/"
    },
    {
      organization: "Andhra Pradesh Public Service Commission (APPSC)",
      jobTitle: "Group 1 Services Exam",
      category: "State Government Jobs",
      location: "Andhra Pradesh",
      isApplied: false,
      applicants: 0,
      applyURL: "https://example.com/apply/appsc-group1"
    },
    {
      organization: "Andhra Pradesh State Road Transport Corporation (APSRTC)",
      jobTitle: "Conductor Exam",
      category: "Transportation Jobs",
      location: "Andhra Pradesh",
      isApplied: true,
      applicants: 10,
      applyURL: "https://example.com/apply/apsrtc-conductor"
    },
    {
      organization: "Andhra Pradesh Police Department",
      jobTitle: "Sub-Inspector Exam",
      category: "Police Jobs",
      location: "Andhra Pradesh",
      isApplied: false,
      applicants: 0,
      applyURL: "https://example.com/apply/ap-police-si"
    },

    // Arunachal Pradesh
    {
      organization: "Arunachal Pradesh Public Service Commission (APPSC)",
      jobTitle: "Arunachal Pradesh Civil Service (APCS) Exam",
      category: "State Government Jobs",
      location: "Arunachal Pradesh",
      isApplied: false,
      applicants: 0,
      applyURL: "https://example.com/apply/appsc-apcs"
    },
    {
      organization: "Arunachal Pradesh State Electricity Board (APSEB)",
      jobTitle: "Junior Engineer Exam",
      category: "Power Jobs",
      location: "Arunachal Pradesh",
      isApplied: true,
      applicants: 5,
      applyURL: "https://example.com/apply/apseb-je"
    },
    {
      organization: "Arunachal Pradesh Police Department",
      jobTitle: "Constable Exam",
      category: "Police Jobs",
      location: "Arunachal Pradesh",
      isApplied: false,
      applicants: 0,
      applyURL: "https://example.com/apply/ap-police-constable"
    },

    // Assam
    {
      organization: "Assam Public Service Commission (APSC)",
      jobTitle: "Assam Civil Service (ACS) Exam",
      category: "State Government Jobs",
      location: "Assam",
      isApplied: false,
      applicants: 0,
      applyURL: "https://example.com/apply/apsc-acs"
    },
    {
      organization: "Assam State Electricity Board (ASEB)",
      jobTitle: "Assistant Engineer Exam",
      category: "Power Jobs",
      location: "Assam",
      isApplied: true,
      applicants: 10,
      applyURL: "https://example.com/apply/aseb-ae"
    },
    {
      organization: "Assam Police Department",
      jobTitle: "Sub-Inspector Exam",
      category: "Police Jobs",
      location: "Assam",
      isApplied: false,
      applicants: 0,
      applyURL: "https://example.com/apply/assam-police-si"
    },

    // Bihar
    {
      organization: "Bihar Public Service Commission (BPSC)",
      jobTitle: "Bihar Civil Service (BCS) Exam",
      category: "State Government Jobs",
      location: "Bihar",
      isApplied: false,
      applicants: 0,
      applyURL: "https://example.com/apply/bpsc"
    },
    {
      organization: "Bihar Public Service Commission (BPSC)",
      jobTitle: "Bihar Civil Service (BCS) Exam",
      category: "State Government Jobs",
      location: "Bihar",
      isApplied: false,
      applicants: 0,
      applyURL: "https://example.com/apply/bpsc-bcs"
    },
    {
      organization: "Bihar State Electricity Board (BSEB)",
      jobTitle: "Junior Engineer Exam",
      category: "Power Jobs",
      location: "Bihar",
      isApplied: true,
      applicants: 10,
      applyURL: "https://example.com/apply/bseb-je"
    },
    {
      organization: "Bihar Police Department",
      jobTitle: "Sub-Inspector Exam",
      category: "Police Jobs",
      location: "Bihar",
      isApplied: false,
      applicants: 0,
      applyURL: "https://example.com/apply/bihar-police-si"
    },

    // Chhattisgarh
    {
      organization: "Chhattisgarh Public Service Commission (CGPSC)",
      jobTitle: "Chhattisgarh Civil Service (CCS) Exam",
      category: "State Government Jobs",
      location: "Chhattisgarh",
      isApplied: false,
      applicants: 0,
      applyURL: "https://example.com/apply/cgpsc-ccs"
    },
    {
      organization: "Chhattisgarh State Electricity Board (CSEB)",
      jobTitle: "Assistant Engineer Exam",
      category: "Power Jobs",
      location: "Chhattisgarh",
      isApplied: true,
      applicants: 15,
      applyURL: "https://example.com/apply/cseb-ae"
    },
    {
      organization: "Chhattisgarh Police Department",
      jobTitle: "Constable Exam",
      category: "Police Jobs",
      location: "Chhattisgarh",
      isApplied: false,
      applicants: 0,
      applyURL: "https://example.com/apply/chhattisgarh-police-constable"
    },

    // Goa
    {
      organization: "Goa Public Service Commission (GPSC)",
      jobTitle: "Goa Civil Service (GCS) Exam",
      category: "State Government Jobs",
      location: "Goa",
      isApplied: false,
      applicants: 0,
      applyURL: "https://example.com/apply/gpsc-gcs"
    },
    {
      organization: "Goa Public Service Commission (GPSC)",
      jobTitle: "Goa Civil Service (GCS) Exam",
      category: "State Government Jobs",
      location: "Goa",
      isApplied: false,
      applicants: 0,
      applyURL: "https://example.com/apply/gpsc-gcs"
    },
    {
      organization: "Goa Shipyard Limited",
      jobTitle: "General Manager, Office Assistant & Others",
      category: "Government Jobs",
      location: "Goa",
      isApplied: true,
      applicants: 10,
      applyURL: "https://example.com/apply/goa-shipyard"
    },
    {
      organization: "Goa Police Department",
      jobTitle: "Sub-Inspector Exam",
      category: "Police Jobs",
      location: "Goa",
      isApplied: false,
      applicants: 0,
      applyURL: "https://example.com/apply/goa-police-si"
    },

    // Gujarat
    {
      organization: "Gujarat Public Service Commission (GPSC)",
      jobTitle: "Gujarat Civil Service (GCS) Exam",
      category: "State Government Jobs",
      location: "Gujarat",
      isApplied: false,
      applicants: 0,
      applyURL: "https://example.com/apply/gpsc-gcs"
    },
    {
      organization: "Gujarat State Electricity Corporation Limited (GSECL)",
      jobTitle: "Junior Engineer Exam",
      category: "Power Jobs",
      location: "Gujarat",
      isApplied: true,
      applicants: 15,
      applyURL: "https://example.com/apply/gsecl-je"
    },
    {
      organization: "Gujarat Police Department",
      jobTitle: "Constable Exam",
      category: "Police Jobs",
      location: "Gujarat",
      isApplied: false,
      applicants: 0,
      applyURL: "https://example.com/apply/gujarat-police-constable"
    },

    // Haryana
    {
      organization: "Haryana Public Service Commission (HPSC)",
      jobTitle: "Haryana Civil Service (HCS) Exam",
      category: "State Government Jobs",
      location: "Haryana",
      isApplied: false,
      applicants: 0,
      applyURL: "https://example.com/apply/hpsc-hcs"
    },
    {
      organization: "Haryana State Electricity Board (HSEB)",
      jobTitle: "Assistant Engineer Exam",
      category: "Power Jobs",
      location: "Haryana",
      isApplied: true,
      applicants: 20,
      applyURL: "https://example.com/apply/hseb-ae"
    },
    {
      organization: "Haryana Police Department",
      jobTitle: "Sub-Inspector Exam",
      category: "Police Jobs",
      location: "Haryana",
      isApplied: false,
      applicants: 0,
      applyURL: "https://example.com/apply/haryana-police-si"
    },

    // Himachal Pradesh
    {
      organization: "Himachal Pradesh Public Service Commission (HPPSC)",
      jobTitle: "Himachal Pradesh Civil Service (HPCS) Exam",
      category: "State Government Jobs",
      location: "Himachal Pradesh",
      isApplied: false,
      applicants: 0,
      applyURL: "https://example.com/apply/himachal-pradesh-hpcs"
    },
    {
      organization: "Jammu and Kashmir Public Service Commission (JKPSC)",
      jobTitle: "Jammu and Kashmir Civil Service (JKCS) Exam",
      category: "State Government Jobs",
      location: "Jammu and Kashmir",
      isApplied: false,
      applicants: 0,
      applyURL: "https://example.com/apply/jkpsc-jkcs"
    },
    {
      organization: "Jammu and Kashmir Police Department",
      jobTitle: "Sub-Inspector Exam",
      category: "Police Jobs",
      location: "Jammu and Kashmir",
      isApplied: true,
      applicants: 10,
      applyURL: "https://example.com/apply/jk-police-si"
    },
    {
      organization: "Jammu and Kashmir Power Development Department",
      jobTitle: "Junior Engineer Exam",
      category: "Power Jobs",
      location: "Jammu and Kashmir",
      isApplied: false,
      applicants: 0,
      applyURL: "https://example.com/apply/jk-power-je"
    },

    // Jharkhand
    {
      organization: "Jharkhand Public Service Commission (JPSC)",
      jobTitle: "Jharkhand Civil Service (JCS) Exam",
      category: "State Government Jobs",
      location: "Jharkhand",
      isApplied: false,
      applicants: 0,
      applyURL: "https://example.com/apply/jpsc-jcs"
    },
    {
      organization: "Jharkhand Police Department",
      jobTitle: "Constable Exam",
      category: "Police Jobs",
      location: "Jharkhand",
      isApplied: true,
      applicants: 15,
      applyURL: "https://example.com/apply/jharkhand-police-constable"
    },
    {
      organization: "Jharkhand State Electricity Board (JSEB)",
      jobTitle: "Assistant Engineer Exam",
      category: "Power Jobs",
      location: "Jharkhand",
      isApplied: false,
      applicants: 0,
      applyURL: "https://example.com/apply/jseb-ae"
    },

    // Karnataka
    {
      organization: "Karnataka Public Service Commission (KPSC)",
      jobTitle: "Karnataka Civil Service (KCS) Exam",
      category: "State Government Jobs",
      location: "Karnataka",
      isApplied: false,
      applicants: 0,
      applyURL: "https://example.com/apply/kpsc-kcs"
    },
    {
      organization: "Karnataka Police Department",
      jobTitle: "Sub-Inspector Exam",
      category: "Police Jobs",
      location: "Karnataka",
      isApplied: true,
      applicants: 20,
      applyURL: "https://example.com/apply/karnataka-police-si"
    },
    {
      organization: "Karnataka Power Corporation Limited (KPCL)",
      jobTitle: "Junior Engineer Exam",
      category: "Power Jobs",
      location: "Karnataka",
      isApplied: false,
      applicants: 0,
      applyURL: "https://example.com/apply/kpcl-je"
    },

    // Kerala
    {
      organization: "Kerala Public Service Commission (KPSC)",
      jobTitle: "Kerala Civil Service (KCS) Exam",
      category: "State Government Jobs",
      location: "Kerala",
      isApplied: false,
      applicants: 0,
      applyURL: "https://example.com/apply/kpsc-kcs"
    },
    {
      organization: "Kerala State Electricity Board (KSEB)",
      jobTitle: "Assistant Engineer Exam",
      category: "Power Jobs",
      location: "Kerala",
      isApplied: true,
      applicants: 25,
      applyURL: "https://example.com/apply/kseb-ae"
    },
    {
      organization: "Kerala Police Department",
      jobTitle: "Constable Exam",
      category: "Police Jobs",
      location: "Kerala",
      isApplied: false,
      applicants: 0,
      applyURL: "https://example.com/apply/kerala-police-constable"
    },
    {
      organization: "Lakshadweep Administration",
      jobTitle: "Lower Division Clerk (LDC) Exam",
      category: "State Government Jobs",
      location: "Lakshadweep",
      isApplied: false,
      applicants: 0,
      applyURL: "https://example.com/apply/lakshadweep-ldc"
    },
    {
      organization: "Lakshadweep Police Department",
      jobTitle: "Constable Exam",
      category: "Police Jobs",
      location: "Lakshadweep",
      isApplied: true,
      applicants: 10,
      applyURL: "https://example.com/apply/lakshadweep-police-constable"
    },
    {
      organization: "Lakshadweep Electricity Department",
      jobTitle: "Junior Engineer Exam",
      category: "Power Jobs",
      location: "Lakshadweep",
      isApplied: false,
      applicants: 0,
      applyURL: "https://example.com/apply/lakshadweep-je"
    },

    // Madhya Pradesh
    {
      organization: "Madhya Pradesh Public Service Commission (MPPSC)",
      jobTitle: "Madhya Pradesh Civil Service (MPCS) Exam",
      category: "State Government Jobs",
      location: "Madhya Pradesh",
      isApplied: false,
      applicants: 0,
      applyURL: "https://example.com/apply/mppsc-mpcs"
    },
    {
      organization: "Madhya Pradesh Police Department",
      jobTitle: "Sub-Inspector Exam",
      category: "Police Jobs",
      location: "Madhya Pradesh",
      isApplied: true,
      applicants: 20,
      applyURL: "https://example.com/apply/madhya-pradesh-police-si"
    },
    {
      organization: "Madhya Pradesh Power Generation Company Limited (MPPGCL)",
      jobTitle: "Assistant Engineer Exam",
      category: "Power Jobs",
      location: "Madhya Pradesh",
      isApplied: false,
      applicants: 0,
      applyURL: "https://example.com/apply/mppgcl-ae"
    },

    // Maharashtra
    {
      organization: "Maharashtra Public Service Commission (MPSC)",
      jobTitle: "Maharashtra Civil Service (MCS) Exam",
      category: "State Government Jobs",
      location: "Maharashtra",
      isApplied: false,
      applicants: 0,
      applyURL: "https://example.com/apply/mpsc-mcs"
    },
    {
      organization: "Maharashtra Police Department",
      jobTitle: "Constable Exam",
      category: "Police Jobs",
      location: "Maharashtra",
      isApplied: true,
      applicants: 30,
      applyURL: "https://example.com/apply/maharashtra-police-constable"
    },
    {
      organization: "Maharashtra State Electricity Transmission Company Limited (MSETCL)",
      jobTitle: "Junior Engineer Exam",
      category: "Power Jobs",
      location: "Maharashtra",
      isApplied: false,
      applicants: 0,
      applyURL: "https://example.com/apply/msetcl-je"
    },

    // Manipur
    {
      organization: "Manipur Public Service Commission (MPSC)",
      jobTitle: "Manipur Civil Service (MCS) Exam",
      category: "State Government Jobs",
      location: "Manipur",
      isApplied: false,
      applicants: 0,
      applyURL: "https://example.com/apply/mpsc-mcs"
    },
    {
      organization: "Manipur Police Department",
      jobTitle: "Sub-Inspector Exam",
      category: "Police Jobs",
      location: "Manipur",
      isApplied: true,
      applicants: 10,
      applyURL: "https://example.com/apply/mpcs-sub-inspector"
    },
    {
      organization: "Manipur State Electricity Board (MSEB)",
      jobTitle: "Assistant Engineer Exam",
      category: "Power Jobs",
      location: "Manipur",
      isApplied: false,
      applicants: 0,
      applyURL: "https://example.com/apply/mseb-ae"
    },
    {
      organization: "Meghalaya Public Service Commission (MPSC)",
      jobTitle: "Meghalaya Civil Service (MCS) Exam",
      category: "State Government Jobs",
      location: "Meghalaya",
      isApplied: false,
      applicants: 0,
      applyURL: "https://example.com/apply/mpsc-mcs"
    },
    {
      organization: "Meghalaya Police Department",
      jobTitle: "Sub-Inspector Exam",
      category: "Police Jobs",
      location: "Meghalaya",
      isApplied: true,
      applicants: 15,
      applyURL: "https://example.com/apply/meghalaya-police-si"
    },
    {
      organization: "Meghalaya Energy Corporation Limited (MeECL)",
      jobTitle: "Assistant Engineer Exam",
      category: "Power Jobs",
      location: "Meghalaya",
      isApplied: false,
      applicants: 0,
      applyURL: "https://example.com/apply/meecl-ae"
    },

    // Mizoram
    {
      organization: "Mizoram Public Service Commission (MPSC)",
      jobTitle: "Mizoram Civil Service (MCS) Exam",
      category: "State Government Jobs",
      location: "Mizoram",
      isApplied: false,
      applicants: 0,
      applyURL: "https://example.com/apply/mpsc-mcs"
    },
    {
      organization: "Mizoram Police Department",
      jobTitle: "Constable Exam",
      category: "Police Jobs",
      location: "Mizoram",
      isApplied: true,
      applicants: 10,
      applyURL: "https://example.com/apply/mizoram-police-constable"
    },
    {
      organization: "Mizoram State Electricity Board (MSEB)",
      jobTitle: "Junior Engineer Exam",
      category: "Power Jobs",
      location: "Mizoram",
      isApplied: false,
      applicants: 0,
      applyURL: "https://example.com/apply/mseb-je"
    },

    // Nagaland
    {
      organization: "Nagaland Public Service Commission (NPSC)",
      jobTitle: "Nagaland Civil Service (NCS) Exam",
      category: "State Government Jobs",
      location: "Nagaland",
      isApplied: false,
      applicants: 0,
      applyURL: "https://example.com/apply/npsc-ncs"
    },
    {
      organization: "Nagaland Police Department",
      jobTitle: "Sub-Inspector Exam",
      category: "Police Jobs",
      location: "Nagaland",
      isApplied: true,
      applicants: 20,
      applyURL: "https://example.com/apply/nagaland-police-si"
    },
    {
      organization: "Nagaland State Electricity Board (NSEB)",
      jobTitle: "Assistant Engineer Exam",
      category: "Power Jobs",
      location: "Nagaland",
      isApplied: false,
      applicants: 0,
      applyURL: "https://example.com/apply/nseb-ae"
    },

    // Odisha
    {
      organization: "Odisha Public Service Commission (OPSC)",
      jobTitle: "Odisha Civil Service (OCS) Exam",
      category: "State Government Jobs",
      location: "Odisha",
      isApplied: false,
      applicants: 0,
      applyURL: "https://example.com/apply/opsc-ocs"
    },
    {
      organization: "Odisha Police Department",
      jobTitle: "Constable Exam",
      category: "Police Jobs",
      location: "Odisha",
      isApplied: true,
      applicants: 30,
      applyURL: "https://example.com/apply/odisha-police-constable"
    },
    {
      organization: "Odisha Power Transmission Corporation Limited (OPTCL)",
      jobTitle: "Junior Engineer Exam",
      category: "Power Jobs",
      location: "Odisha",
      isApplied: false,
      applicants: 0,
      applyURL: "https://example.com/apply/optcl-je"
    },

    // Punjab
    {
      organization: "Punjab Public Service Commission (PPSC)",
      jobTitle: "Punjab Civil Service (PCS) Exam",
      category: "State Government Jobs",
      location: "Punjab",
      isApplied: false,
      applicants: 0,
      applyURL: "https://example.com/apply/ppsc-pcs"
    },
    {
      organization: "Punjab Police Department",
      jobTitle: "Sub-Inspector Exam",
      category: "Police Jobs",
      location: "Punjab",
      isApplied: true,
      applicants: 25,
      applyURL: "https://example.com/apply/punjab-police-si"
    },
    {
      organization: "Punjab State Power Corporation Limited (PSPCL)",
      jobTitle: "Assistant Engineer Exam",
      category: "Power Jobs",
      location: "Punjab",
      isApplied: false,
      applicants: 0,
      applyURL: "https://example.com/apply/pspcl-ae"
    },
    {
      organization: "Rajasthan Public Service Commission (RPSC)",
      jobTitle: "Rajasthan Administrative Service (RAS) Exam",
      category: "State Government Jobs",
      location: "Rajasthan",
      isApplied: false,
      applicants: 0,
      applyURL: "https://example.com/apply/rpsc-ras"
    },
    {
      organization: "Rajasthan Police Department",
      jobTitle: "Constable Exam",
      category: "Police Jobs",
      location: "Rajasthan",
      isApplied: true,
      applicants: 20,
      applyURL: "https://example.com/apply/rajasthan-police-constable"
    },
    {
      organization: "Rajasthan State Electricity Board (RSEB)",
      jobTitle: "Junior Engineer Exam",
      category: "Power Jobs",
      location: "Rajasthan",
      isApplied: false,
      applicants: 0,
      applyURL: "https://example.com/apply/rseb-je"
    },
    
    // Sikkim
    {
      organization: "Sikkim Public Service Commission (SPSC)",
      jobTitle: "Sikkim Civil Service (SCS) Exam",
      category: "State Government Jobs",
      location: "Sikkim",
      isApplied: false,
      applicants: 0,
      applyURL: "https://example.com/apply/spsc-scs"
    },
    {
      organization: "Sikkim Police Department",
      jobTitle: "Sub-Inspector Exam",
      category: "Police Jobs",
      location: "Sikkim",
      isApplied: true,
      applicants: 15,
      applyURL: "https://example.com/apply/sikkim-police-si"
    },
    {
      organization: "Sikkim State Electricity Board (SSEB)",
      jobTitle: "Assistant Engineer Exam",
      category: "Power Jobs",
      location: "Sikkim",
      isApplied: false,
      applicants: 0,
      applyURL: "https://example.com/apply/sseb-ae"
    },
    
    // Tamil Nadu
    {
      organization: "Tamil Nadu Public Service Commission (TNPSC)",
      jobTitle: "Tamil Nadu Civil Service (TNCS) Exam",
      category: "State Government Jobs",
      location: "Tamil Nadu",
      isApplied: false,
      applicants: 0,
      applyURL: "https://example.com/apply/tnpsc-tnsc"
    },
    {
      organization: "Tamil Nadu Police Department",
      jobTitle: "Constable Exam",
      category: "Police Jobs",
      location: "Tamil Nadu",
      isApplied: true,
      applicants: 30,
      applyURL: "https://example.com/apply/tamil-nadu-police-constable"
    },
    {
      organization: "Tamil Nadu Electricity Board (TNEB)",
      jobTitle: "Junior Engineer Exam",
      category: "Power Jobs",
      location: "Tamil Nadu",
      isApplied: false,
      applicants: 0,
      applyURL: "https://example.com/apply/tneb-je"
    },
    {
      organization: "Telangana State Public Service Commission (TSPSC)",
      jobTitle: "Telangana State Civil Service (TSCS) Exam",
      category: "State Government Jobs",
      location: "Telangana",
      isApplied: false,
      applicants: 0,
      applyURL: "https://example.com/apply/tspsc-tscs"
    },
    {
      organization: "Telangana Police Department",
      jobTitle: "Sub-Inspector Exam",
      category: "Police Jobs",
      location: "Telangana",
      isApplied: true,
      applicants: 15,
      applyURL: "https://example.com/apply/telangana-police-si"
    },
    {
      organization: "Telangana State Southern Power Distribution Company Limited (TSSPDCL)",
      jobTitle: "Junior Lineman Exam",
      category: "Power Jobs",
      location: "Telangana",
      isApplied: false,
      applicants: 0,
      applyURL: "https://example.com/apply/tsspdcl-jl"
    },
    
    // Tripura
    {
      organization: "Tripura Public Service Commission (TPSC)",
      jobTitle: "Tripura Civil Service (TCS) Exam",
      category: "State Government Jobs",
      location: "Tripura",
      isApplied: false,
      applicants: 0,
      applyURL: "https://example.com/apply/tpsc-tcs"
    },
    {
      organization: "Tripura Police Department",
      jobTitle: "Sub-Inspector Exam",
      category: "Police Jobs",
      location: "Tripura",
      isApplied: true,
      applicants: 10,
      applyURL: "https://example.com/apply/tripura-police-si"
    },
    {
      organization: "Tripura State Electricity Corporation Limited (TSECL)",
      jobTitle: "Junior Engineer Exam",
      category: "Power Jobs",
      location: "Tripura",
      isApplied: false,
      applicants: 0,
      applyURL: "https://example.com/apply/tsecl-je"
    },
    
    // Uttarakhand
    {
      organization: "Uttarakhand Public Service Commission (UPSC)",
      jobTitle: "Uttarakhand Civil Service (UCS) Exam",
      category: "State Government Jobs",
      location: "Uttarakhand",
      isApplied: false,
      applicants: 0,
      applyURL: "https://example.com/apply/uppsc-ucs"
    },
    {
      organization: "Uttarakhand Police Department",
      jobTitle: "Constable Exam",
      category: "Police Jobs",
      location: "Uttarakhand",
      isApplied: true,
      applicants: 0,
      applyURL: "https://example.com/apply/uttarakhand-police-constable"
    },
    {
      organization: "UPSSSC",
      jobTitle: "Junior Analyst (Food)",
      category: "Food Technology",
      location: "Uttar Pradesh",
      isApplied: false,
      applicants: 0,
      applyURL: "https://example.com/apply/upsssc-junior-analyst-food"
    },
    {
      organization: "UPSSSC",
      jobTitle: "Agriculture Technical Assistant",
      category: "Agriculture",
      location: "Uttar Pradesh",
      isApplied: false,
      applicants: 0,
      applyURL: "https://example.com/apply/upsssc-agriculture-technical-assistant"
    },
    {
      organization: "UPPSC",
      jobTitle: "Medical Officer Allopathy, Divisional Publication Officer & Other",
      category: "Medical",
      location: "Uttar Pradesh",
      isApplied: false,
      applicants: 0,
      applyURL: "https://example.com/apply/uppsc-medical-officer-allopathy"
    },
    {
      organization: "WBPSC",
      jobTitle: "Sub-Inspector",
      category: "Police Jobs",
      location: "West Bengal",
      isApplied: false,
      applicants: 0,
      applyURL: "https://example.com/apply/wbpsc-sub-inspector"
    },
    {
      organization: "WBSSC",
      jobTitle: "Clerk",
      category: "Clerk",
      location: "West Bengal",
      isApplied: false,
      applicants: 0,
      applyURL: "https://example.com/apply/wbssc-clerk"
    },
    {
      organization: "WBPDCL",
      jobTitle: "Assistant Engineer",
      category: "Engineering",
      location: "West Bengal",
      isApplied: false,
      applicants: 0,
      applyURL: "https://example.com/apply/wbpdcl-assistant-engineer"
    },
  ];

  // Distinct job categories and locations
  const categories = [...new Set(jobData.map(job => job.category))];
  const locations = [...new Set(jobData.map(job => job.location))];

  // Populate category dropdown
  const categoryDropdown = $('#categoryDropdown');
  categoryDropdown.append('<option value="">All</option>');
  categories.forEach(category => {
    categoryDropdown.append(`<option value="${category}">${category}</option>`);
  });

  // Populate location dropdown
  const locationDropdown = $('#locationDropdown');
  locationDropdown.append('<option value="">All</option>');
  locations.forEach(location => {
    locationDropdown.append(`<option value="${location}">${location}</option>`);
  });

  // Function to render job data
  function renderJobs(jobs, container) {
    container.empty();

    if (jobs.length === 0) {
      container.append('<p>No jobs found.</p>');
    } else {
      jobs.forEach(job => {
        const jobElement = `
          <div class="job-card">
            <div class="job-title">${job.jobTitle} (${job.organization})</div>
            <div class="job-details">Category: ${job.category}</div>
            <div class="job-details">Location: ${job.location}</div>
            <div class="job-actions">
              <a href="${job.isApplied ? '#' : job.applyURL}" class="btn btn-primary btn-sm ${job.isApplied ? 'disabled' : ''}" target="_blank">
                ${job.isApplied ? 'Applied' : 'Apply'}
              </a>
            </div>
          </div>
        `;
        container.append(jobElement);
      });
    }
  }

  // Function to render applied job data
  function renderAppliedJobs(jobs, container) {
    container.empty();

    if (jobs.length === 0) {
      container.append('<p>No applied jobs found.</p>');
    } else {
      jobs.forEach(job => {
        const jobElement = `
          <div class="job-card">
            <div class="job-title">${job.jobTitle} (${job.company})</div>
            <div class="job-details">Category: ${job.category}</div>
            <div class="job-details">Location: ${job.location}</div>
            <div class="job-actions">
              <a href="${`https://www.naukri.com/upsc-jobs?${job.categorty}`? '#' : `https://www.naukri.com/upsc-jobs?k=${job.categorty}`}" class="btn btn-primary btn-sm ${job.isApplied ? 'disabled' : ''}" target="_blank">
                ${job.isApplied ? 'Applied' : 'Apply'}
              </a>
            </div>
          </div>
        `;
        container.append(jobElement);
      });
    }
  }

  // Function to render applied job data
  function renderAppliedJobs(jobs, container) {
    container.empty();

    if (jobs.length === 0) {
      container.append('<p>No applied jobs found.</p>');
    } else {
      jobs.forEach(job => {
        const jobElement = `
          <div class="job-card">
            <div class="job-title">${job.jobTitle} (${job.company})</div>
            <div class="job-details">Category: ${job.category}</div>
            <div class="job-details">Location: ${job.location}</div>
            <div class="job-details">Applicants: ${job.applicants}</div>
          </div>
        `;
        container.append(jobElement);
      });
    }
  }

  // Initial job rendering
  const availableJobs = jobData.filter(job => !job.isApplied);
  const appliedJobs = jobData.filter(job => job.isApplied);
  renderJobs(availableJobs, $('#jobs'));
  renderAppliedJobs(appliedJobs, $('#applied'));

  // Filter jobs based on selected category and location
  $('#checkButton').click(function() {
    const selectedCategory = $('#categoryDropdown').val();
    const selectedLocation = $('#locationDropdown').val();

    const filteredAvailableJobs = jobData.filter(job => {
      const categoryMatch = selectedCategory === '' || job.category === selectedCategory;
      const locationMatch = selectedLocation === '' || job.location === selectedLocation;
      return !job.isApplied && categoryMatch && locationMatch;
    });

    const filteredAppliedJobs = jobData.filter(job => {
      const categoryMatch = selectedCategory === '' || job.category === selectedCategory;
      const locationMatch = selectedLocation === '' || job.location === selectedLocation;
      return job.isApplied && categoryMatch && locationMatch;
    });

    renderJobs(filteredAvailableJobs, $('#jobs'));
    renderAppliedJobs(filteredAppliedJobs, $('#applied'));
  });
});