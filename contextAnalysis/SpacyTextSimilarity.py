import en_core_web_md
import spacy

# Load English tokenizer, tagger, parser, NER and word vectors
#nlp = spacy.load('en_core_web_md')
nlp = en_core_web_md.load()

search_sentence = nlp("francisco caldas")
# Process whole documents
text = ("pode trabajo    memoriaacademica    eafitplus    cajadeherramientastecnologicas    guiasinstruccionales    repositorios    francisco-jose-de-caldas-y-tenorio    admisiones de posgrados    Agencia de noticias    Albatros Create    Alemán     Año"
        "Administración logística y mantenimiento    Civil y geología    Derecho - política - gestión pública y urbanismo    Diseño y tecnología    Economía - finanzas - costos y contaduría    Física y matemáticas    Gestión humana y social    Humanidades y ciencias sociales    Mercadeo    Música    Procesos industriales y sostenibilidad    Riesgos - control y auditoría    Tecnologías de información y comunicaciones    Argumentación    Asesoría Monitores     Atenea"
        "Documentación    Atreverse a Pensar    Autoevaluación    Autoevaluacion Institucional    Aviación    Bachillerato internacional    Beca EAFIT    Beca Fundación Suiza    Becas    Becas Andi-EAFIT    Becas bicentenario    Becas Cultura e Idioma    Becas Ingeniería Agronómica    Bienestar    Bilingüismo    bioingenieria    Burkenroad    Cafet    calidadaire    Campus    Campus Global    Carnetización    carrera ingenieria    Catálogo Fondo Editorial    Celee    Celee Servicios    Centro Análisis Político    Centro Conciliación    Centro de Laboratorios    Centro de Pensamiento Estratégico    Centro de Visitantes    centrointegridad    ceremonias    Ceremonias de grado    Chino Mandarín    Ciclo Siete    Cief    Ciencias Políticas    Clarisax    Clca 2016    Club de Mercadeo    cobertura wifi    cobertura-wi-fi    Colaboración    Colombianistas    Comunicacion Social    comunicado-vicerrectorias    Concurso Matemáticas y Física    condiciones-concurso-decoracion    Congreso Operadores de Cables    Constitución    Construyamos futuro    Contaduría    Convenios    convenios-software    Copy of Especialización en Derecho Penal    Correo electrónico    Correo Office 365    Coyuntura Economica    Curso Celta    DataPol    Departamento Finanzas    departamento gobierno    Departamento Música    Deportes    Depp    Derecho 20 años    Desarrollo Artístico    Desarrollo Empleados    Desarrollo Humano Virtual    Direción Informática    Directorio de empresarios eafitenses    Diseño Producto    Diseños de Productos    Doble programa    Docentes Cec    doctorado economia    Doctorado en Administración    Doctorado en Ciencias de la Tierra    Doctorado en Economía    Doctorado en Humanidades    Doctorado en Ingeniería    Doctorado en Ingeniería Matemática    Doctorado Ing Matematica    Donaciones    EAFIT en cifras    EAFIT en colombia    eafit pereira    eafitense    eafitmun    eafit-virtual    economia investigativa    economia y finanzas    Economía y Finanzas Bulletin News    Editorial    Editorial EAFIT     Educación Continua - redirecciones"
        "Congreso de Narrativa    Corporativos    egresadosqueinspiran    el eafitense    elecciones    entrenamiento para vendedores    Epik    Escialización en Gestión de la Construcción    escuela de administracion    escuela de igenieria    Especialización Control Organizacional Virtual    Especialización de Diseño de Sistemas Técnicos    Especialización de Operaciones y Logística    Especialización Diseño de Procesos Químicos Biotecnológicos    Especialización en Administración de Riesgos y Seguros    Especialización en Control Organizacional    Especialización en Derecho Penal    Especialización en Derecho Público    Especialización en Derecho Urbano    Especialización en Desarrollo de Software    Especialización en Diseño de Materiales    Especialización en Diseño Mecánico    Especialización en Diseño Vial e Ingeniería de Pavimentos    Especialización en Estudios Políticos    Especialización en Finanzas    Especialización en Gerencia de Desarrollo Humano    Especialización en Gerencia de Desarrollo Humano Virtual    Especialización en Gerencia de Diseño de Producto    Especialización en Gerencia de Instituciones de Salud    Especialización en Gerencia de Negocios Internacionales    Especialización en Gerencia de Proyectos    Especialización en Gestión Pública Municipal / Virtual    Especialización en Gestión Sostenible de Procesos Industriales    Especialización en Gestión Tributaria Internacional    Especialización en Ingeniería Sismo-Resistente    Especialización en los Procesos de Transformación del Plástico y del Caucho    Especialización en Mantenimiento Industrial    Especialización en Mecánica de Suelos y Cimentaciones    Especialización en Mercadeo    Especialización en Rediseño de Productos    Especialización en Sistemas de Información    Especialización en Turbomáquinas    Especialización Especialización en Mecánica Computacional    eventocentrointegridad     EXA"
        "Momento Docente    experiencia eafit    feria laboral    feria laboral virtual    Filantropia    Financiación    fisica aplicada    Fomune    fondo editorial    Formación Musical    Formulario de divulgación    formulario divulgacion    Francés    futere vision workshop    Futuro contigo    Gemi    GeneracionE    geologia pregrado    gerencia de negocios    GiANT    global desing    grid    Grupo Estudiantial Aiesec    grupo proyeccion    grupos estudiantiles    GSERM    Guía de aspirantes a posgrado    h2020    hayfestival    Historia EAFIT    Historia empresarial    ICON-S Colombia    induccion padres    induccion padres 2    Informatica Educativa    Informe 2017    Informe financiero    informes    ing de procesos    ing de produccion    Ingeniería Agronómica    ingenieria civil    ingenieria de procesos    Ingeniería de procesos 20 años    ingenieria de produccion    ingenieria de sistemas    ingenieria fisica    ingenieria matematicas    ingenieria mecanica    ingenieria-sistemas    Inglés    Inglés de Negocios    Inspira Crea Transforma    International Eafit    Italiano    Itinerario2030    Japonés    jornadas de procesos    Juan Felipe Gaviria Gutierrez    Jurse 2021    Kratos    laboratorio financiero    Línea de Transparencia    maestria econimia aplicada    Maestría en Administración    Maestría en Administración 2    Maestría en Administración de Riesgos    Maestría en administración Financiera    Maestría en administración financiera 2    Maestría en Ciencias de la administración    Maestría en Ciencias de la Tierra    Maestría en Ciencias de los Datos y Analítica    Maestría en Comunicación Transmedia    Maestría en Derecho    Maestría en Derecho Penal    Maestría en Desarrollo Humano Organizacional 2    Maestría en Desarrollo Humano Organizacional virtual    Maestría en Docencia en Educación Superior    Maestría en Economía    Maestría en Economía Aplicada    Maestría en Escrituras Creativas    Maestría en Estudios Humanísticos    Maestría en Finanzas    Maestría en Física Aplicada    Maestría en Gerencia de Empresas Sociales para la innovación y el desarrollo    Maestría en Gerencia de Proyectos    Maestría en Gerencia de Proyectos / Pereira    Maestría en Gerencia Integral por Procesos    Maestría en gerencias de la innovación y el conocimiento    Maestría en Gobierno y Políticas Públicas    Maestría en Hermenéutica Literaria    Maestría en Hermenéutica Literaria 2    Maestría en Ingeniería    Maestría en Matemáticas aplicadas 2    Maestría en Mercadeo    Maestría en Mercadeo - Pereira    Maestría en Música    Maestría en Música 2    Maestría en Procesos Urbanos y Ambinetales    Maestría Matemáticas Aplicada    maestria-administracion-financiera    maestria-comunicacion-transmedia    Maravillas Español Tomo 2    MercaLAB EAFIT     Mes"
        "Mixta    Presencial    Virtual    Modelado matemático    Momento Docente    Monitorías    Movilidad    Nexos    Open Day    Open Day Bogotá    Open Day Pereira    Open House    Organización Estudiantil OE    Panorama Contable    Parqueaderos    Partners Campus    Patentes     Patrimonio Musical")
doc = nlp(text)
search_doc_no_stop_words = nlp(' '.join([str(t) for t in doc if not t.is_stop]))
main_doc_no_stop_words = nlp(' '.join([str(t) for t in search_sentence if not t.is_stop]))
print(main_doc_no_stop_words.similarity(search_doc_no_stop_words))