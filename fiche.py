from lxml import etree

def transform_xml_to_html(xml_filename, xslt_filename, output_filename):
    # Charger le fichier XML  
    dom = etree.parse(xml_filename)

    # Charger la feuille de style XSLT
    xslt = etree.parse(xslt_filename)

    # Créer un transformateur XSLT
    transform = etree.XSLT(xslt)

    # Appliquer la transformation
    result_tree = transform(dom)

    # Écrire le résultat dans un fichier HTML
    with open(output_filename, 'wb') as f:
        f.write(etree.tostring(result_tree, pretty_print=True))

# Exemple d'utilisation
if __name__ == "__main__":
    transform_xml_to_html('XML/Fiches.xml', 'fiche_transform.xslt', 'Content/Collection/fig006.xhtml')