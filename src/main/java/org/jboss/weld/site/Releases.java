package org.jboss.weld.site;

import io.quarkiverse.roq.data.runtime.annotations.DataMapping;
import java.util.List;

@DataMapping(value = "releases", type = DataMapping.Type.ARRAY_FILE)
public record Releases(List<Release> list) {
}
