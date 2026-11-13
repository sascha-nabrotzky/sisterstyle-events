<?php
defined('TYPO3') || die();

$table = 'sys_file_reference';
$field = 'crop';

$GLOBALS['TCA'][$table]['columns'][$field]['config'] = [
     'type' => 'imageManipulation',
     'cropVariants' => [
        'default' => [
            'title' => 'Default',
            'allowedAspectRatios' => [
                 '4:3' => [
                    'title' => '4:3',
                    'value' => 4 / 3
                ],
                '3:4' => [
                    'title' => '3:4',
                    'value' => 3 / 4
                ],
                 '1:1' => [
                    'title' => '1:1',
                    'value' => 1 / 1
                ],
                 'Frei' => [
                     'title' => 'Frei',
                     'value' => 0.0
                 ],
             ],
        ],
     ]
];