<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">

<xsl:template match="/">
    <html  xmlns="http://www.w3.org/1999/xhtml">
        <head>
            <meta charset="utf-8"/>
            <title>Fiche</title> 
            <link rel = "stylesheet" href="/Styles/fichestyle.css"/>
          </head>
          <body>
            <div>
                <img class="header_img" src="/Images/Header.jpg"/>
            </div>
            <nav>
                <ul>
                    <li><a href="http://127.0.0.1:5500/index.xhtml#">Catalogue</a></li>
                    <li><a href="#">Histoire</a></li>
                    <li><a href="#">À propos</a></li>
                    <li><a href="#">Contact</a></li>
                    <li><a href="#">Miscellaneous</a></li>
                    <li><a href="#">Formulaires</a></li>
                </ul>
              </nav>
            <h1><xsl:value-of select="catalogue/figurine[@id='fig006']/nom"/></h1>
            <div class="fiche">
                <xsl:variable name="image_path" select="catalogue/figurine[@id='fig006']/photos/@chemin"/>
                <img class="img_fig" src="{$image_path}"/>
                <div class="fiche_description">
                    <p><strong>Nom</strong> : <xsl:value-of select="catalogue/figurine[@id='fig006']/nom"/></p>
                    <p><strong>Thème</strong> : <xsl:value-of select="catalogue/figurine[@id='fig006']/theme/@categorie"/></p>
                    <p><strong>Caractéristiques : </strong></p>
                    <div class="fiche_caractéristiques">
                        <p>- <strong>Année de sortie</strong> : <xsl:value-of select="catalogue/figurine[@id='fig006']/caracteristiques/sortie"/></p>
                        <p>- <strong>Nombre de pièces</strong> : <xsl:value-of select="catalogue/figurine[@id='fig006']/caracteristiques/nombre_de_pieces/@nombre"/></p>
                    </div>
                    <p><strong>Prix</strong> : <xsl:value-of select="catalogue/figurine[@id='fig006']/prix/@prix"/></p>
                </div>
            </div>
            <h2>Description</h2>
            <p class="description">
                <xsl:value-of select="catalogue/figurine[@id='fig006']/description"/>
            </p>
            <h2>Autres figurines</h2>
            <div class="autre_figurines">
                <xsl:for-each select="catalogue/figurine">
                    <xsl:if test="@id != 'fig006'">
                        <xsl:variable name="img_path" select="photos/@chemin"/>
                        <img class="img_fig" src="{$img_path}"/>
                    </xsl:if>
                </xsl:for-each>
            </div>
        </body>
    </html>
</xsl:template>

</xsl:stylesheet>