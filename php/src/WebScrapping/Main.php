<?php

namespace Chuva\Php\WebScrapping;

/**
 * Runner for the Webscrapping exercice.
 */
class Main
{

  /**
   * Main runner, instantiates a Scrapper and runs.
   */
  public static function run(): void
  {
    $dom = new \DOMDocument('1.0', 'utf-8');
    $dom->loadHTMLFile(__DIR__ . '/../../assets/origin.html');

    $data = (new Scrapper())->scrap($dom);

    // Write your logic to save the output file bellow.
    print_r($data);
  }
}





























use DOMDocument;
use DOMXPath;

require_once 'php\src\spout-3.3.0\src\Spout\Autoloader\autoload.php';


libxml_use_internal_errors(true);

$content = file_get_contents('php\assets\origin.html');
$document = new DOMDocument();
$document->loadHTML($content);

$xPath = new DOMXPath($document);

// Consulta para obter elementos com a classe "my-xs paper-title"
$paperTitles = $xPath->query('.//h4[@class="my-xs paper-title"]');

// Consulta para obter elementos com a classe "authors"
$authors = $xPath->query('.//div[@class="authors"]');

// Consulta para obter elementos com a classe "tags mr-sm"
$tags = $xPath->query('.//div[@class="tags mr-sm"]');

// Consulta para obter elementos com a classe "volume-info"
$volumeInfo = $xPath->query('.//div[@class="volume-info"]');

// Consulta para obter os elementos <span> dentro da classe "authors"
$institutionElements = $xPath->query('//div[@class="authors"]/span');

// Iterar sobre os resultados das consultas
foreach ($paperTitles as $index => $paperTitle) {
  echo 'Paper Title: ' . $paperTitle->textContent . PHP_EOL;

  // Verifique se há correspondência na consulta de autores
  if (isset($authors[$index])) {
    echo 'Authors: ' . $authors[$index]->textContent . PHP_EOL;
  }

  // Verifique se há correspondência na consulta de tags
  if (isset($tags[$index])) {
    echo 'Tags: ' . $tags[$index]->textContent . PHP_EOL;
  }

  // Verifique se há correspondência na consulta de volume-info
  if (isset($volumeInfo[$index])) {
    echo 'Volume Info: ' . $volumeInfo[$index]->textContent . PHP_EOL;
  }

  // Verifique se há correspondência na consulta de instituição
  if (isset($institutionElements[$index])) {
    $institution = $institutionElements[$index]->getAttribute('title');
    echo 'Instituição: ' . $institution . PHP_EOL;
  }

  echo PHP_EOL; // Adicione uma linha em branco entre as entradas
}
