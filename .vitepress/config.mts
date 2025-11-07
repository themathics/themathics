import { defineConfig } from 'vitepress'

export default defineConfig({
  head: [['link', { rel: 'icon', href: '/assets/favicon.ico' }]],
  title: "TheMathics",
  description: "A website with notes and resources for learning mathematics, physics, and linguistics.",
    themeConfig: {
    search: {
      provider: 'local'
    },
    logo: 'assets/logo.jpg',
    nav: [
      { text: 'Home', link: './' },
      {
        text: 'Subjects',
        items: [
          {text: 'Mathematics', items: [
          { text: 'Calculus', link: 'en/mathematics/calc' },
          { text: 'Multivariable Calculus', link: 'en/mathematics/multicalc' },
          { text: 'Linear Algebra', link: 'en/mathematics/linalg' },
          { text: 'Differential Equations', link: 'en/mathematics/diffeq' },
          { text: 'Partial Differential Equations', link: 'en/mathematics/pdes' },
          { text: 'Differential Geometry', link: 'en/mathematics/diffgeo' }]
          },
          {text: 'Physics', items: [
          { text: 'Physics', link: 'en/physics/phys' },
          { text: 'Analytical Mechanics', link: 'en/physics/mech' },
          { text: 'Electromagnetism', link: 'en/physics/electromagnetism' },
          { text: 'Statistical Mechanics', link: 'en/physics/stats' },
          { text: 'Quantum Mechanics', link: 'en/physics/quantum' },
          { text: 'Relativity', link: 'en/physics/relativity' }]
          },
          {text: 'Language', items: [
          { text: 'Linguistics', link: 'en/language/linguistics' },
          { text: 'Serbo-Croatian', link: 'en/language/serbo-croatian' },
          { text: 'Russian', link: 'en/language/russian' }]
          },
        ]
      },
      { text: 'About', link: 'en/about' },
    ],

    sidebar: {
      '/en/mathematics/calc': [
        { text: 'Introduction', link: '/en/mathematics/calc/index' },
        {
          text: 'Limits and Continuity',
          items: [
            { text: 'Limits', link: '/en/mathematics/calc/limits/1' },
            { text: 'One-sided Limits', link: '/en/mathematics/calc/limits/2' },
            { text: 'Evaluating Limits', link: '/en/mathematics/calc/limits/3' },
            { text: 'Continuity', link: '/en/mathematics/calc/limits/4' },
            { text: 'Precise Definition of the Limit', link: '/en/mathematics/calc/limits/5' }
          ]
        },
        {
          text: 'Rates of Change',
          items: [
            { text: 'Introduction', link: '/en/mathematics/calc/rates-of-change/0' },
            { text: 'Difference Quotient', link: '/en/mathematics/calc/rates-of-change/1' },
            { text: 'Tangent Lines', link: '/en/mathematics/calc/rates-of-change/2' }
          ]
        },
        {
          text: 'Derivatives',
          items: [
            { text: 'Introduction', link: '/en/mathematics/calc/derivatives/0' },
            { text: 'Polynomials', link: '/en/mathematics/calc/derivatives/1' },
            { text: 'Exponential Functions', link: '/en/mathematics/calc/derivatives/2' },
            { text: 'Logarithmic Functions', link: '/en/mathematics/calc/derivatives/3' },
            { text: 'Trigonometric Functions', link: '/en/mathematics/calc/derivatives/4' },
            { text: 'Hyperbolic Functions', link: '/en/mathematics/calc/derivatives/5' },
            { text: 'Product and Quotient Rule', link: '/en/mathematics/calc/derivatives/6' },
            { text: 'Chain Rule', link: '/en/mathematics/calc/derivatives/7' },
            { text: 'Implicit Differentiation', link: '/en/mathematics/calc/derivatives/8' },
            { text: 'Higher-Order Derivatives', link: '/en/mathematics/calc/derivatives/9' },
            { text: 'Logarithmic Differentiation', link: '/en/mathematics/calc/derivatives/10' }
          ]
        },
        {
          text: 'Applications of Derivatives',
          items: [
            { text: 'Rates of Change', link: '/en/mathematics/calc/applications-derivatives/1' },
            { text: 'Related Rates', link: '/en/mathematics/calc/applications-derivatives/2' },
            { text: 'Finding Extrema', link: '/en/mathematics/calc/applications-derivatives/3' },
            { text: 'Analyzing the Shape of a Graph', link: '/en/mathematics/calc/applications-derivatives/4' },
            { text: 'Mean Value Theorem', link: '/en/mathematics/calc/applications-derivatives/5' },
            { text: 'Optimization', link: '/en/mathematics/calc/applications-derivatives/6' },
            { text: 'Linearization', link: '/en/mathematics/calc/applications-derivatives/7' },
            { text: "L'Hôpital's Rule", link: '/en/mathematics/calc/applications-derivatives/8' },
            { text: 'Iterated Functions', link: '/en/mathematics/calc/applications-derivatives/9' },
            { text: "Newton's Method", link: '/en/mathematics/calc/applications-derivatives/10' },
            { text: 'Differentials', link: '/en/mathematics/calc/applications-derivatives/11' }
          ]
        },
        {
          text: 'Integrals',
          items: [
            { text: 'Antiderivatives', link: '/en/mathematics/calc/integrals/1' },
            { text: 'Indefinite Integrals', link: '/en/mathematics/calc/integrals/2' },
            { text: 'Finding Extrema', link: '/en/mathematics/calc/integrals/3' },
            { text: 'Substitution', link: '/en/mathematics/calc/integrals/4' },
            { text: 'Definite Integrals', link: '/en/mathematics/calc/integrals/5' },
            { text: 'Numerical Integration', link: '/en/mathematics/calc/integrals/6' }
          ]
        },
        {
          text: 'Integration Techniques',
          items: [
            { text: 'Integration by Parts', link: '/en/mathematics/calc/integration-techniques/1' },
            { text: 'Trigonometric Integrals', link: '/en/mathematics/calc/integration-techniques/2' },
            { text: 'Trigonometric Substitutions', link: '/en/mathematics/calc/integration-techniques/3' },
            { text: 'Partial Fraction Decomposition', link: '/en/mathematics/calc/integration-techniques/4' },
            { text: 'Integrals of Inverse Functions', link: '/en/mathematics/calc/integration-techniques/5' },
            { text: 'Integrals Involving Roots', link: '/en/mathematics/calc/integration-techniques/6' },
            { text: 'Integrals Involving Quadratics', link: '/en/mathematics/calc/integration-techniques/7' },
            { text: "Euler's Identity", link: '/en/mathematics/calc/integration-techniques/8' },
            { text: 'Strategy for Integrating', link: '/en/mathematics/calc/integration-techniques/9' }
          ]
        },
        {
          text: 'Applications of Integrals',
          items: [
            { text: 'Average Value of a Function', link: '/en/mathematics/calc/applications-integrals/1' },
            { text: 'Measuring Volumes', link: '/en/mathematics/calc/applications-integrals/2' },
            { text: 'Arc Length', link: '/en/mathematics/calc/applications-integrals/3' },
            { text: 'Surface Area', link: '/en/mathematics/calc/applications-integrals/4' },
            { text: 'Center of Mass', link: '/en/mathematics/calc/applications-integrals/5' },
            { text: 'Probability', link: '/en/mathematics/calc/applications-integrals/6' }
          ]
        },
        {
          text: 'Parametric Equations and Polar Coordinates',
          items: [
            { text: 'Parametric Curves', link: '/en/mathematics/calc/parametric-polar/0' },
            { text: 'Calculus With Parametric Curves', link: '/en/mathematics/calc/parametric-polar/1' },
            { text: 'Polar Coordinates', link: '/en/mathematics/calc/parametric-polar/2' },
            { text: 'Conic Sections', link: '/en/mathematics/calc/parametric-polar/3' },
            { text: 'Area and Length in Polar Coordinates', link: '/en/mathematics/calc/parametric-polar/4' }          ]
        },
        {
          text: 'Sequences and Series',
          items: [
            { text: 'Sequences', link: '/en/mathematics/calc/sequences-series/1' },
            { text: 'Series', link: '/en/mathematics/calc/sequences-series/2' },
            { text: 'Convergence and Divergence', link: '/en/mathematics/calc/derisequences-seriesvatives/3' },
            { text: 'Common Series', link: '/en/mathematics/calc/sequences-series/4' },
            { text: 'Integral Test', link: '/en/mathematics/calc/sequences-series/5' },
            { text: 'Comparison Test', link: '/en/mathematics/calc/sequences-series/6' },
            { text: 'Alternating Series Test', link: '/en/mathematics/calc/sequences-series/7' },
            { text: 'Absolute Convergence', link: '/en/mathematics/calc/sequences-series/8' },
            { text: 'Ratio and Root Test', link: '/en/mathematics/calc/sequences-series/9' },
            { text: 'Strategy for Series', link: '/en/mathematics/calc/sequences-series/10' },
            { text: 'Power Series', link: '/en/mathematics/calc/sequences-series/11' },
            { text: 'Taylor Series', link: '/en/mathematics/calc/sequences-series/12' },
            { text: 'Binomial Series', link: '/en/mathematics/calc/sequences-series/13' }
          ]
        },
        {
          text: 'Special Topics - Products',
          items: [
            { text: 'Products', link: '/en/mathematics/calc/products/1' },
            { text: 'Differentiating Products', link: '/en/mathematics/calc/products/2' },
            { text: 'Integrating Products', link: '/en/mathematics/calc/products/3' },
            { text: 'Infinite Products', link: '/en/mathematics/calc/products/4' },
            { text: 'Special Products', link: '/en/mathematics/calc/products/5' }          ]
        },
      ],

      '/en/mathematics/linalg': [
        { text: 'Introduction', link: '/en/mathematics/linalg/index' },
        {
          text: 'Linear Equations',
          items: [
            { text: 'Introduction', link: '/en/mathematics/linalg/linear-equations/0' },
            { text: 'Method of Elimination', link: '/en/mathematics/linalg/linear-equations/1' },
            { text: 'Gaussian Elimination', link: '/en/mathematics/linalg/linear-equations/2' },
          ]
        },
        {
          text: 'Matrices',
          items: [
            { text: 'Introduction', link: '/en/mathematics/linalg/matrices/0' },
            { text: 'Matrix Multiplication', link: '/en/mathematics/linalg/matrices/1' },
            { text: 'Elementary Matrices', link: '/en/mathematics/linalg/matrices/2' },
          ]
        },
        {
          text: 'Vector Spaces',
          items: [
            { text: 'Introduction', link: '/en/mathematics/linalg/vector-spaces/0' },
            { text: 'Subspaces', link: '/en/mathematics/linalg/vector-spaces/1' },
            { text: 'Span and Linear Independence', link: '/en/mathematics/linalg/vector-spaces/2' },
            { text: 'Bases', link: '/en/mathematics/linalg/vector-spaces/3' },
            { text: 'Dimension', link: '/en/mathematics/linalg/vector-spaces/4' },
          ]
        },
        {
          text: 'Linear Maps',
          items: [
            { text: 'Introduction', link: '/en/mathematics/linalg/linear-maps/0' },
            { text: 'Nullspace and Range', link: '/en/mathematics/linalg/linear-maps/1' },
            { text: 'Matrices', link: '/en/mathematics/linalg/linear-maps/2' },
            { text: 'Composition of Linear Maps', link: '/en/mathematics/linalg/linear-maps/3' },
            { text: 'Invertibility', link: '/en/mathematics/linalg/linear-maps/4' },
            { text: 'Linear Operators', link: '/en/mathematics/linalg/linear-maps/5' },
          ]
        },
        {
          text: 'Determinants',
          items: [
            { text: 'Permutations', link: '/en/mathematics/linalg/determinants/1' },
            { text: 'Definition of the Determinant', link: '/en/mathematics/linalg/determinants/2' },
            { text: 'Cofactor Expension', link: '/en/mathematics/linalg/determinants/3' },
            { text: "Cramer's Rule", link: '/en/mathematics/linalg/determinants/4' },
            { text: 'Adjugate Matrices', link: '/en/mathematics/linalg/determinants/5' },          
          ]
        },
        {
          text: 'Eigenvalues and Eigenvectors',
          items: [
            { text: 'Invariance', link: '/en/mathematics/linalg/eigenvalues-eigenvectors/1' },
            { text: 'Minimal Polynomial', link: '/en/mathematics/linalg/eigenvalues-eigenvectors/2' },
            { text: 'Eigenvectors', link: '/en/mathematics/linalg/eigenvalues-eigenvectors/3' },
            { text: 'Triangulization', link: '/en/mathematics/linalg/eigenvalues-eigenvectors/4' },
            { text: 'Diagonalization', link: '/en/mathematics/linalg/eigenvalues-eigenvectors/5' },          
          ]
        },
        {
          text: 'Inner Product Spaces',
          items: [
            { text: 'Inner Products', link: '/en/mathematics/linalg/inner-product-spaces/1' },
            { text: 'Orthogonalization', link: '/en/mathematics/linalg/inner-product-spaces/2' },
            { text: 'Orthogonal Projections', link: '/en/mathematics/linalg/inner-product-spaces/3' },
            { text: 'Hermitian Products', link: '/en/mathematics/linalg/inner-product-spaces/4' },
          ]
        },
        {
          text: 'Operators on Inner Product Spaces',
          items: [
            { text: 'Adjoints', link: '/en/mathematics/linalg/operators-inner-products/1' },
            { text: 'Normal Operators', link: '/en/mathematics/linalg/operators-inner-products/2' },
            { text: 'Positive Operators', link: '/en/mathematics/linalg/operators-inner-products/3' },
            { text: 'Orthogonal Operators', link: '/en/mathematics/linalg/operators-inner-products/4' },
            { text: 'Unitary Operators', link: '/en/mathematics/linalg/operators-inner-products/5' },
          ]
        },
        {
          text: 'Spectral Theorem',
          items: [
            { text: 'Triangulation', link: '/en/mathematics/linalg/spectral-theorem/1' },
            { text: 'The Spectral Theorem', link: '/en/mathematics/linalg/spectral-theorem/2' },
            { text: 'Polar Decomposition', link: '/en/mathematics/linalg/spectral-theorem/3' },
            { text: 'Singular Value Decomposition', link: '/en/mathematics/linalg/spectral-theorem/4' },
          ]
        },
      ],

      '/en/mathematics/multicalc': [
        { text: 'Introduction', link: '/en/mathematics/multicalc/index' },
        {
          text: 'Vectors and Vector Functions',
          items: [
            { text: 'Introduction', link: '/en/mathematics/multicalc/vectors/0' },
            { text: 'Dot Product and Projections', link: '/en/mathematics/multicalc/vectors/1' },
            { text: 'Vector Functions', link: '/en/mathematics/multicalc/vectors/2' },
            { text: 'Calculus of Vector Functions', link: '/en/mathematics/multicalc/vectors/3' },
            { text: 'Arc Length', link: '/en/mathematics/multicalc/vectors/4' },
            { text: 'Tangent and Normal Vectors', link: '/en/mathematics/multicalc/vectors/5' },
            { text: 'Curvature', link: '/en/mathematics/multicalc/vectors/6' },
          ]
        },
        {
          text: 'Polar Coordinates',
          items: [
            { text: 'Introduction', link: '/en/mathematics/multicalc/polar/0' },
            { text: 'Cylindrical Coordinates', link: '/en/mathematics/multicalc/polar/1' },
            { text: 'Spherical Coordinates', link: '/en/mathematics/multicalc/polar/2' },
          ]
        },
        {
          text: 'Partial Derivatives',
          items: [
            { text: 'Limits and Continuity', link: '/en/mathematics/multicalc/partials/1' },
            { text: 'Partial Derivatives', link: '/en/mathematics/multicalc/partials/2' },
            { text: 'Differentials', link: '/en/mathematics/multicalc/partials/3' },
            { text: 'Chain Rule', link: '/en/mathematics/multicalc/partials/4' },
            { text: 'Gradient and Directional Derivatives', link: '/en/mathematics/multicalc/partials/5' },
          ]
        },
        {
          text: 'Applications of Partial Derivatives',
          items: [
            { text: 'Linear Approximations', link: 'en/mathematics/multicalc/applications-partials/1' },
            { text: 'Finding Extrema', link: '/en/mathematics/multicalc/applications-partials/2' },
            { text: 'Lagrange Multipliers', link: '/en/mathematics/multicalc/applications-partials/3' },
          ]
        },
        {
          text: 'Multiple Integrals',
          items: [
            { text: 'Double Integrals', link: '/en/mathematics/multicalc/multiple-integrals/1' },
            { text: 'General Regions', link: '/en/mathematics/multicalc/multiple-integrals/2' },
            { text: 'Surface Area', link: '/en/mathematics/multicalc/multiple-integrals/3' },
            { text: 'Triple Integrals', link: '/en/mathematics/multicalc/multiple-integrals/4' },
            { text: 'Cylindrical Coordinates', link: '/en/mathematics/multicalc/multiple-integrals/5' },
            { text: 'Spherical Coordinates', link: '/en/mathematics/multicalc/multiple-integrals/6' },
            { text: 'Change of Variables', link: '/en/mathematics/multicalc/multiple-integrals/7' },
          ]
        },
        {
          text: 'Vector Calculus',
          items: [
            { text: 'Vector Fields', link: '/en/mathematics/multicalc/vector-calc/1' },
            { text: 'Line Integrals', link: '/en/mathematics/multicalc/vector-calc/2' },
            { text: 'Fundamental Theorem for Line Integrals', link: '/en/mathematics/multicalc/vector-calc/3' },
            { text: "Green's Theorem", link: '/en/mathematics/multicalc/vector-calc/4' },
            { text: 'Curl and Divergence', link: '/en/mathematics/multicalc/vector-calc/5' },
            { text: 'Parametric Surfaces', link: '/en/mathematics/multicalc/vector-calc/6' },
            { text: 'Surface Integrals', link: '/en/mathematics/multicalc/vector-calc/7' },
            { text: "Stoke's Theorem", link: '/en/mathematics/multicalc/vector-calc/8' },
            { text: 'Divergence Theorem', link: '/en/mathematics/multicalc/vector-calc/9' },
          ]
        },
        {
          text: 'Variational Calculus',
          items: [
            { text: 'Introduction', link: 'en/mathematics/multicalc/variational-calc/0' },
            { text: 'Functional Derivative', link: 'en/mathematics/multicalc/variational-calc/1' },
            { text: 'Euler-Lagrange Equation', link: '/en/mathematics/multicalc/variational-calc/2' },
            { text: 'Variational Problems', link: '/en/mathematics/multicalc/variational-calc/3' },
          ]
        },
        {
          text: 'Complex Analysis',
          items: [
            { text: 'Introduction', link: 'en/mathematics/multicalc/complex-calc/0' },
            { text: 'Differentiating Complex Functions', link: 'en/mathematics/multicalc/complex-calc/1' },
            { text: 'Contour Integrals', link: '/en/mathematics/multicalc/complex-calc/2' },
            { text: 'Couchy Integrals', link: '/en/mathematics/multicalc/complex-calc/3' },
            { text: 'Residue Theorem', link: '/en/mathematics/multicalc/complex-calc/4' },
            { text: 'Fourier Analysis', link: '/en/mathematics/multicalc/complex-calc/5' },
          ]
        },
      ],

      '/en/mathematics/pdes': [
        { text: 'Introduction to PDEs', link: '/en/mathematics/pdes/index' },
        {
          text: 'First-order PDEs',
          items: [
            { text: 'Linear Constant Coefficient Equations', link: 'en/mathematics/pdes/1st-order/1' },
            { text: 'Method of Characteristics', link: 'en/mathematics/pdes/1st-order/2' },
            { text: 'Nonlinear Equations', link: 'en/mathematics/pdes/1st-order/3' },
            { text: 'Examples of First-order PDEs', link: 'en/mathematics/pdes/1st-order/4' },
          ]
        },
        {
          text: 'Second-order PDEs',
          items: [
            { text: 'Wave Equation', link: 'en/mathematics/pdes/2nd-order/1' },
            { text: 'Seperation of Variables', link: 'en/mathematics/pdes/2nd-order/2' },
            { text: "Laplace's Equations", link: 'en/mathematics/pdes/2nd-order/3' },
            { text: 'Classification of Second-order PDEs', link: 'en/mathematics/pdes/2nd-order/4' },
          ]
        },
        {
          text: 'IVPs and IBPs',
          items: [
            { text: 'Initial Value Problems', link: 'en/mathematics/pdes/ivbps/1' },
            { text: 'Explicit Boundary Conditions', link: 'en/mathematics/pdes/ivbps/2' },
            { text: 'Implicit Boundary Conditions', link: 'en/mathematics/pdes/ivbps/3' },
            { text: 'Examples of IVPs and BVPs', link: 'en/mathematics/pdes/ivbps/4' },
          ]
        },
        {
          text: 'Fourier Series',
          items: [
            { text: 'Introduction to Fourier Series', link: 'en/mathematics/pdes/fourier/0' },
            { text: 'Orthogonality', link: 'en/mathematics/pdes/fourier/1' },
            { text: 'Gibbs Phenomenon', link: 'en/mathematics/pdes/fourier/2' },
            { text: 'Examples Using Fourier Series', link: 'en/mathematics/pdes/fourier/3' },
          ]
        },
        {
          text: 'Eigenvalue Problems',
          items: [
            { text: 'Introduction to Eigenvalue Problems', link: 'en/mathematics/pdes/eigenvalues/0' },
            { text: 'Completeness', link: 'en/mathematics/pdes/eigenvalues/1' },
            { text: 'Sturm-Liouville Equations', link: 'en/mathematics/pdes/eigenvalues/2' },
            { text: 'Asympiotics', link: 'en/mathematics/pdes/eigenvalues/3' },
          ]
        },
        {
          text: 'Eigenvalue Problems',
          items: [
            { text: 'Introduction to Eigenvalue Problems', link: 'en/mathematics/pdes/eigenvalues/0' },
            { text: 'Completeness', link: 'en/mathematics/pdes/eigenvalues/1' },
            { text: 'Sturm-Liouville Equations', link: 'en/mathematics/pdes/eigenvalues/2' },
            { text: 'Asympiotics', link: 'en/mathematics/pdes/eigenvalues/3' },
          ]
        },
        {
          text: 'Complex Functions',
          items: [
            { text: 'Introduction to Complex Numbers', link: 'en/mathematics/pdes/complex-functions/0' },
            { text: 'Complex Functions', link: 'en/mathematics/pdes/complex-functions/1' },
            { text: 'Complex Differentiation', link: 'en/mathematics/pdes/complex-functions/2' },
            { text: 'Complex Integration', link: 'en/mathematics/pdes/complex-functions/3' },
            { text: 'Examples of Complex Differential Equations', link: 'en/mathematics/pdes/complex-functions/4' },
          ]
        },
        {
          text: 'Transforms',
          items: [
            { text: 'Fourier Transforms', link: 'en/mathematics/pdes/transforms/1' },
            { text: 'Dirac Delta Function', link: 'en/mathematics/pdes/transforms/2' },
            { text: 'Convolution Integrals', link: 'en/mathematics/pdes/transforms/3' },
            { text: 'Laplace Transform', link: 'en/mathematics/pdes/transforms/4' },
            { text: 'Inverse Laplace Transform', link: 'en/mathematics/pdes/transforms/5' },
            { text: 'Applications of Transforms', link: 'en/mathematics/pdes/transforms/6' },
          ]
        },
        {
          text: "Green's Functions",
          items: [
            { text: 'Introduction', link: 'en/mathematics/pdes/greens-functions/0' },
            { text: "Green's Functions", link: 'en/mathematics/pdes/greens-functions/1' },
            { text: "Applications of Green's Functions", link: 'en/mathematics/pdes/greens-functions/2' },
          ]
        },
      ],
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/themathics' }
    ]
  },
  markdown: {
    math: true
  },
  
  locales: {
    root: {
      label: 'English',
      lang: 'en',
      link: '/en/'
    },
    ru: {
      label: 'Русский',
      lang: 'ru',
      link: '/ru/',
      title: "ДаМатики",
      themeConfig: {
        logo: 'assets/logo.jpg',
        nav: [
          { text: 'Главная', link: './' },
          {
            text: 'Предметы',
            items: [
              {text: 'Математика', items: []
              },
              {text: 'Фижика', items: []
              },
              {text: 'Язык', items: []
              },
            ]},
          { text: 'О нас', link: 'ru/about' },

        ],
        },
    },
    sr: {
      label: 'Српски',
      lang: 'sr',
      link: '/sr/',
      title: "ДаМатики",
      themeConfig: {
        logo: 'assets/logo.jpg',
        nav: [
          { text: 'почетна', link: './' },
          {
            text: 'Предмети',
            items: [
              {text: 'Математика', items: []
              },
              {text: 'Фижика', items: []
              },
              {text: 'Језик', items: []
              },
            ]},
          { text: 'О нама', link: 'sr/about' },
        ],
        },
    },
    hr: {
      label: 'Hrvatski',
      lang: 'hr',
      link: '/hr/',
      title: "DaMatiki",
      themeConfig: {
        logo: 'assets/logo.jpg',
        nav: [
          { text: 'Početna', link: './' },
          {
            text: 'Predmeti',
            items: [
              {text: 'Matimatika', items: []
              },
              {text: 'Fizika', items: []
              },
              {text: 'Jezik', items: []
              },
            ]},
          { text: 'O nama', link: 'hr/about' },
        ],
        },
    },
    es: {
    label: 'Español',
      lang: 'es',
      link: '/es/',
      title: "LasMaticas",
      themeConfig: {
        logo: 'assets/logo.jpg',
        nav: [
          { text: 'Principal', link: './' },
          {
            text: 'Sujetas',
            items: [
              {text: 'Matemáticas', items: []
              },
              {text: 'Física', items: []
              },
              {text: 'Idioma', items: []
              },
            ]},
          { text: 'Sobre', link: 'hr/about' },
        ],
        },
    }
  },
  lastUpdated: true

})

