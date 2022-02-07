import * as React from "react";

const url = 'url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMAAAADACAYAAABS3GwHAAAACXBIWXMAAFiVAABYlQHZbTfTAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAmhSURBVHgB7d3/lRTHEcDxWj/9b84JaM4JSJAAixIwdgAGFIBBJMDKAVg4AR92AJIIwMcpAZ0UgNl1AAacwJW6rnt0PyS4rZ6Z3ZqZ7+e9fivQ/uJt10z/LhEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADC0hWBQqtqkh2Uqn6bycSr251vl8bJNKu/K44+p/GBlsVhsBBiTVOmXqTxPZa3drVM5svcUIKpUQW+l8iyVtzqc16k80HxXAfZvRxX/OvusrwgE7FWqgI91txX/uvM7ggC7ZFfeVF5pHBYIjQBD0/1f9d/nTSpPBBiK5nZ3ZGepPBOgb5qHIsfiH4KtMBG2hVShTiVPZI3JaZpEuyP4oN8IPihV/iMZX+U3t7kToBPN4/tj9zfBe9EEeo9UcR6nh+fSnxPJa3zs0db5vEtNlHfls9q1QVbsbnNX8vqhPmgqT9Nn9flvwZRpHufvY6jT3mNVKnjNd3io/awnsiHSRoBt9FDprOL3Miaf3sdKH4FwLMBNSmXrwlaBuq/4N3yn9o7wQuvZHAETZXi/UsnWWm/QClYC4QutZ02hXoMTE6L1M73W5FnKDpQguK31fZSVANdpt47vTucJShDc0zrcBS5hIuzCUvJWRa8v0hDjD7JD6fPs4VUqT8XvIBX6ArhK69r+R7JH6fMXmjvd7ruAAC3Ne3i91rrnsXXNTaED9TfdbERoKaAJVDwUv9W+T2woTaG3qfxVfOyFfxDAqL/5s5ZANDeFvHeB1wLuAJqbMY34rCQWW+/zd/FplOURBIDULXX+TuLxBoBZyswRAP4AOIl2WlvpC9jK0hPPy1L5RGaOAPBXgohX/9aPzuc3MnMEgL8SnEpM1g/wBufHMnMEgH/2978Sl3dGevZLIma/I8zGA8XnoN3JFUn5Z9gyB88sr6Z/y6wvggSAMwAWpccZkc0HpIczz0vmHgA0gTBrBMBElBtZIz7hmnK7RgDMGwEgcFWC4MsHvKM6BIBgSpWAAHAiADBrBEDOyujRSFyN+PxfZo4A8DcDGpmOtzJzH8kEaD7l4L5c5OK1x1tytU28kYscvLae57uyqnNKV0FvH2D2d4DRBkCp9HaA7VK2W9felLK89B41pzk0EtdvxYcAkJG5VPHtaI+ui7lqNsPMfgXllIwqADTnv+qj4ndxIDHZOqDG8XybOt7IzI0iAMrk0zcSI1PL7HdRTUn4USDNiaAj5ehqJC5v82z2o0ChA6A0eV5IsI0bEzpNgXkACapU/pXERDNoIkIGQKr8Nqa/krgOJaZGfDYyc+ECoDQv9nro7BYawSREvAPYsd/RN2tHbQI14sNqUAmktPsbiS/KiFQnETf371qYDd6l6dP10Fn7Qe2IwJNUNu0JbmX22Cqt9S3sVORGujuMckIcJ0JMgHbLgLhWx3n32k/a0TDHi2vOE3CoPpwOLUGaQJqv/g+kjl3xb6er2cm2L0jPfWGvkboDZVtRR4LgEOUWuJQ6X6bK/KSmLWuvsdfae0idpcTSiM9GEEO6A5yq33Ppidbl2QqzjEDrskaSOT4CzelJvdbaY6pPey+t6xM0EkT6LvfV55UgRBNoKX6rPofwyns9Er+lxOG9IGwEIQLAO6Zuw5v/lJ6VTrQ3qO4KRi1CAHhnVV/KcNx5tiSORnwiH/O+MxECoBGfb2U4J+LTCEZtjAFQs5F9WxvxibRmiVPhKoxuKnzI9SsVSxsIgJFjLch0eI9EgcQIgDCnM/c5t7AHDINWGF0AyLAdT/eQrGDUIgSAt1O7lOHcdz5/I3HQB6gQIQC849GP1Z3Y8WblPb1LnL2JqYdEAFQY4x3Afuh7fQZBea+HMu6k2WPuv8xXWYjmtVYWw12hToJze78DlHH9E/FpUnnWx+9Y3qNmL/JpsC2RGKv0A660jr1uUVMBNK+hX2j9Z9fuYOud+peUz/5IxFA0N0Heap2vUjlQRxBorvwH5bW1GglC/QHQ9fAB9E3rr8TnP6jmje6LUq40C9o/68VV/5522xQf6uCu9H0+VZ9InXcY7XYXaK01b2+0Cm5X+DYgDsvfrXr4DNNIIOn7LNWH3WARabe7wK6sJBglAKqFWgyXRlVWEmts/bp1+Y7RNOIz+2PRWxFXg/5JYiZusO/0mUwDo0BFuAAoY+tPJZ7Po4z7/wrSo1YKuR+gnNxWe2DVEOwAriG3YnbFOqBKYTfElLa2BcE+pznts78M2u5HD0LvCCsVb199AvvMz0dS+Rvx2QjOhd8SWZoed6T70ekeNhJ1pzTFMGGj2BNsnc9Ufi/DN4nsqm9NnjuBO7y/hvSoc6F53ctRKmel9OGN5km4Ua6pt4kt9VkKxq0Egq3/+b4iGNrnH4+54rcIgHphUiR1oXltzlLyMYtWGrnaMXxXiu0+sy2YtpXx26nkyNK8urNxvCRMeiegM/WvbG0E5yZxB5g7q9Hic0CGyIwAGLlS910BkCo/v3vB0Yjjx2kQHRAA48eRiB0QAJg1AmD8GvHZCH5GAGDWCIDxoxPcAQEwfnSCOyAAMGsEwPg14kN61EsIAMwaATB+bIjvgAAYPwKgg48EGMClBarXF95ppLV43AHQu1L5D1JZpXKcylkp36fyQCtzOgC/kCrSC/V5KAPSfAT94Q2bdF6X58i+cQeYH28u5K1duvLbVb/5wFMPU/m3BJjFJgDGz5tl85MBr7zWuH8u281NWBA8EaCLVJnvq1/vV16ty7d2LEAX6s8PpqWiSl80t/tvq9+ZAF2p/1QISxN1KD3Q7Tq9YQOAPsA0vBQfawJ9nSpgHwPy9h5fi39NkvH2X4BfUn+OsNaRds+z7B2G/fnqn8qfBeiD+o9HbH2jzjH5Uvl/1+EzzX8E6Ivmc1JrrVN5oDfnWW7//yPtlm7WDiNuJAAOSJqQVKleSx5fr7WR3J94Wf57U/6+kTyBtkzFmi1dhlEtsh4uFot/CdAnre8L7Iq1+59JINwBJiZVMBuR+aPE9Cpd+UOlmiUAJkbzLK+tuuxlnL9HdoT7Z9GOZScAJigFgbXXbZnBgcRgKZlCpp1iImyCUkWzCSZLNh5h0b19h0ck5MDOaR4a7SuPWm2n94EA+2LNIc0bUHbtf5qbYsB+aV4x2iYTHFqbfLARIJJUKZ/ocHcDq/g2w/tYgKj0Is/yG+3njtBW/Gc68nSzmBG9yLN8rN3yLP9lzBWfeQC0eZatw3pXcp5lq9CNXKz5uZ5n2R5fkmkSAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABs4ydRNa3qifSJbwAAAABJRU5ErkJggg==)';
const style = {
	maskSize: 'contain',
	WebkitMaskSize: 'contain',
	maskImage: url,
	WebkitMaskImage: url
};

export default function LeoIcon(props) {
	return <svg width={24} height={24} viewBox="0 0 24 24" style={style} {...props}>
		<rect x={0} y={0} width={24} height={24} fill="currentColor" stroke="none" />
	</svg>
};