var searchData=
[
  ['pairwise_5flinestring_5fdistance_286',['pairwise_linestring_distance',['../group__distance.html#ga9b84330814a70bcaa224fdbf0695113d',1,'cuspatial::pairwise_linestring_distance(std::optional&lt; cudf::device_span&lt; cudf::size_type const &gt;&gt; multilinestring1_geometry_offsets, cudf::device_span&lt; cudf::size_type const &gt; linestring1_part_offsets, cudf::column_view const &amp;linestring1_points_xy, std::optional&lt; cudf::device_span&lt; cudf::size_type const &gt;&gt; multilinestring2_geometry_offsets, cudf::device_span&lt; cudf::size_type const &gt; linestring2_part_offsets, cudf::column_view const &amp;linestring2_points_xy, rmm::mr::device_memory_resource *mr=rmm::mr::get_current_device_resource())'],['../group__distance.html#ga080a2418bc45b1f0351458da1dbf6b29',1,'cuspatial::pairwise_linestring_distance(MultiLinestringRange1 multilinestrings1, MultiLinstringRange2 multilinestrings2, OutputIt distances_first, rmm::cuda_stream_view stream=rmm::cuda_stream_default)']]],
  ['pairwise_5fpoint_5fdistance_287',['pairwise_point_distance',['../group__distance.html#ga59f290225f15f8ed0c555e6c4d733693',1,'cuspatial::pairwise_point_distance(std::optional&lt; cudf::device_span&lt; cudf::size_type const &gt;&gt; multipoints1_offset, cudf::column_view const &amp;points1_xy, std::optional&lt; cudf::device_span&lt; cudf::size_type const &gt;&gt; multipoints2_offset, cudf::column_view const &amp;points2_xy, rmm::mr::device_memory_resource *mr=rmm::mr::get_current_device_resource())'],['../group__distance.html#gaa20c8f26f6ab7473f3e3fa471711c8d9',1,'cuspatial::pairwise_point_distance(MultiPointArrayViewA multipoints1, MultiPointArrayViewB multipoints2, OutputIt distances_first, rmm::cuda_stream_view stream=rmm::cuda_stream_default)']]],
  ['pairwise_5fpoint_5fin_5fpolygon_288',['pairwise_point_in_polygon',['../group__spatial__relationship.html#ga19ebc8167e1c8f5da623a62bb93e4160',1,'cuspatial::pairwise_point_in_polygon(Cart2dItA test_points_first, Cart2dItA test_points_last, OffsetIteratorA polygon_offsets_first, OffsetIteratorA polygon_offsets_last, OffsetIteratorB poly_ring_offsets_first, OffsetIteratorB poly_ring_offsets_last, Cart2dItB polygon_points_first, Cart2dItB polygon_points_last, OutputIt output, rmm::cuda_stream_view stream=rmm::cuda_stream_default)'],['../group__spatial__relationship.html#ga69d996594e4bfe249ae4608ad9d70642',1,'cuspatial::pairwise_point_in_polygon(cudf::column_view const &amp;test_points_x, cudf::column_view const &amp;test_points_y, cudf::column_view const &amp;poly_offsets, cudf::column_view const &amp;poly_ring_offsets, cudf::column_view const &amp;poly_points_x, cudf::column_view const &amp;poly_points_y, rmm::mr::device_memory_resource *mr=rmm::mr::get_current_device_resource())']]],
  ['pairwise_5fpoint_5flinestring_5fdistance_289',['pairwise_point_linestring_distance',['../point__linestring__distance_8hpp.html#a9597144f620390387d009dcaff584eba',1,'cuspatial::pairwise_point_linestring_distance(std::optional&lt; cudf::device_span&lt; cudf::size_type const &gt;&gt; multipoint_geometry_offsets, cudf::column_view const &amp;points_xy, std::optional&lt; cudf::device_span&lt; cudf::size_type const &gt;&gt; multilinestring_geometry_offsets, cudf::device_span&lt; cudf::size_type const &gt; linestring_part_offsets, cudf::column_view const &amp;linestring_points_xy, rmm::mr::device_memory_resource *mr=rmm::mr::get_current_device_resource())'],['../point__linestring__distance_8cuh.html#ae02aa7557cabb14c9a2b65e8f241b77f',1,'cuspatial::pairwise_point_linestring_distance(MultiPointRange multipoints, MultiLinestringRange multilinestrings, OutputIt distances_first, rmm::cuda_stream_view stream=rmm::cuda_stream_default)']]],
  ['pairwise_5fpoint_5flinestring_5fnearest_5fpoints_290',['pairwise_point_linestring_nearest_points',['../point__linestring__nearest__points_8cuh.html#a1b619aebba71c27503d10189cc3280c5',1,'cuspatial::pairwise_point_linestring_nearest_points(OffsetIteratorA points_geometry_offsets_first, OffsetIteratorA points_geometry_offsets_last, Vec2dItA points_first, Vec2dItA points_last, OffsetIteratorB linestring_geometry_offsets_first, OffsetIteratorC linestring_part_offsets_first, OffsetIteratorC linestring_part_offsets_last, Vec2dItB linestring_points_first, Vec2dItB linestring_points_last, OutputIt output_first, rmm::cuda_stream_view stream=rmm::cuda_stream_default)'],['../group__nearest__points.html#gad4a5676b6677d45db20be775db3a5b1b',1,'cuspatial::pairwise_point_linestring_nearest_points(std::optional&lt; cudf::device_span&lt; cudf::size_type const &gt;&gt; multipoint_geometry_offsets, cudf::column_view points_xy, std::optional&lt; cudf::device_span&lt; cudf::size_type const &gt;&gt; multilinestring_geometry_offsets, cudf::device_span&lt; cudf::size_type const &gt; linestring_part_offsets, cudf::column_view linestring_points_xy, rmm::mr::device_memory_resource *mr=rmm::mr::get_current_device_resource())']]],
  ['part_5fbegin_291',['part_begin',['../classcuspatial_1_1multilinestring__ref.html#ae82fd27c34ee5d1118527506aa21ef4f',1,'cuspatial::multilinestring_ref']]],
  ['part_5fend_292',['part_end',['../classcuspatial_1_1multilinestring__ref.html#a4fab3494586e3f2743615da1f3b6db01',1,'cuspatial::multilinestring_ref']]],
  ['part_5fidx_5ffrom_5fpoint_5fidx_293',['part_idx_from_point_idx',['../classcuspatial_1_1multilinestring__range.html#a2b45493bc1488d7babe5b9e87b764939',1,'cuspatial::multilinestring_range']]],
  ['part_5fidx_5ffrom_5fsegment_5fidx_294',['part_idx_from_segment_idx',['../classcuspatial_1_1multilinestring__range.html#a67e622270a86c2c84728b973669fc4c1',1,'cuspatial::multilinestring_range']]],
  ['point_5fbegin_295',['point_begin',['../classcuspatial_1_1multilinestring__ref.html#a465bec0a69786e85436da636674a4bd9',1,'cuspatial::multilinestring_ref::point_begin()'],['../classcuspatial_1_1multipoint__ref.html#a0f417ef39bbeb4e3b07006cf012a2896',1,'cuspatial::multipoint_ref::point_begin()'],['../classcuspatial_1_1multipoint__range.html#a8b74e92314d3b7892cc5b43861ec9bf6',1,'cuspatial::multipoint_range::point_begin()']]],
  ['point_5fbounding_5fboxes_296',['point_bounding_boxes',['../group__spatial__relationship.html#ga232cdb60292ea4a9aad0eae0cef679b9',1,'cuspatial']]],
  ['point_5fend_297',['point_end',['../classcuspatial_1_1multilinestring__ref.html#adf4aa3912c9cf9cdc5152c18a88c3617',1,'cuspatial::multilinestring_ref::point_end()'],['../classcuspatial_1_1multipoint__ref.html#abc9a75651520f6a21e522fa4cf2e4b2b',1,'cuspatial::multipoint_ref::point_end()'],['../classcuspatial_1_1multipoint__range.html#a7e212376e085e5339a73f524c22402d6',1,'cuspatial::multipoint_range::point_end()']]],
  ['point_5fin_5fpolygon_298',['point_in_polygon',['../group__spatial__relationship.html#gaa85dc3aafb04c02e6dca08edccf6fd92',1,'cuspatial::point_in_polygon(Cart2dItA test_points_first, Cart2dItA test_points_last, OffsetIteratorA polygon_offsets_first, OffsetIteratorA polygon_offsets_last, OffsetIteratorB poly_ring_offsets_first, OffsetIteratorB poly_ring_offsets_last, Cart2dItB polygon_points_first, Cart2dItB polygon_points_last, OutputIt output, rmm::cuda_stream_view stream=rmm::cuda_stream_default)'],['../group__spatial__relationship.html#ga889dbc7d657fd83ba40dc572a94a5e48',1,'cuspatial::point_in_polygon(cudf::column_view const &amp;test_points_x, cudf::column_view const &amp;test_points_y, cudf::column_view const &amp;poly_offsets, cudf::column_view const &amp;poly_ring_offsets, cudf::column_view const &amp;poly_points_x, cudf::column_view const &amp;poly_points_y, rmm::mr::device_memory_resource *mr=rmm::mr::get_current_device_resource())']]],
  ['points_5fin_5fspatial_5fwindow_299',['points_in_spatial_window',['../group__spatial__relationship.html#gac6d17ba1201e752fbc6bd2770bb2fb2f',1,'cuspatial']]],
  ['polygon_5fbounding_5fboxes_300',['polygon_bounding_boxes',['../group__spatial__relationship.html#gac53138f1eb9fa9e47ffcafc886256305',1,'cuspatial::polygon_bounding_boxes(PolygonOffsetIterator polygon_offsets_first, PolygonOffsetIterator polygon_offsets_last, RingOffsetIterator polygon_ring_offsets_first, RingOffsetIterator polygon_ring_offsets_last, VertexIterator polygon_vertices_first, VertexIterator polygon_vertices_last, BoundingBoxIterator bounding_boxes_first, T expansion_radius=T{0}, rmm::cuda_stream_view stream=rmm::cuda_stream_default)'],['../group__spatial__relationship.html#ga7204b7f4b27b3883e97d6b5bc6322457',1,'cuspatial::polygon_bounding_boxes(cudf::column_view const &amp;poly_offsets, cudf::column_view const &amp;ring_offsets, cudf::column_view const &amp;x, cudf::column_view const &amp;y, double expansion_radius=0.0, rmm::mr::device_memory_resource *mr=rmm::mr::get_current_device_resource())']]]
];
